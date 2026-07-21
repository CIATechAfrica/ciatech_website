import fs from 'fs';
import path from 'path';

const dir = './src/app/[locale]';
const walkSync = (d, filelist = []) => {
  fs.readdirSync(d).forEach(file => {
    const filepath = path.join(d, file);
    if (fs.statSync(filepath).isDirectory()) {
      filelist = walkSync(filepath, filelist);
    } else if (file.endsWith('.tsx')) {
      filelist.push(filepath);
    }
  });
  return filelist;
};

const files = walkSync(dir);

files.forEach(file => {
  if (file.includes('layout.tsx') || file === path.normalize('src/app/[locale]/page.tsx') || file === path.normalize('src/app/[locale]/about/page.tsx')) {
    // Already manually fixed these
    return;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. generateMetadata signature
  if (content.includes('export async function generateMetadata(): Promise<Metadata> {')) {
    content = content.replace(
      'export async function generateMetadata(): Promise<Metadata> {',
      'export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {\n  const locale = (await params).locale;'
    );
    changed = true;
  }

  // 2. Main component signature
  const mainCompMatch = content.match(/export default async function ([a-zA-Z0-9_]+)\(\) {/);
  if (mainCompMatch) {
    const compName = mainCompMatch[1];
    content = content.replace(
      new RegExp(`export default async function ${compName}\\(\\) {`),
      `export default async function ${compName}({ params }: { params: Promise<{ locale: string }> }) {\n  const locale = (await params).locale;`
    );
    changed = true;
  }

  // 3. getSanityData signatures
  const fetchFuncMatch = content.match(/async function (getSanity[a-zA-Z0-9_]+)\(\) {/);
  if (fetchFuncMatch) {
    const fetchFunc = fetchFuncMatch[1];
    content = content.replace(
      new RegExp(`async function ${fetchFunc}\\(\\) {`),
      `async function ${fetchFunc}(locale: string) {`
    );
    // Update the call
    content = content.replace(
      new RegExp(`const sanityData = await ${fetchFunc}\\(\\);`),
      `const sanityData = await ${fetchFunc}(locale);`
    );
    // There are some pages that do data fetch directly without getSanityData, e.g., team/page.tsx
    // Let's handle them if they have their own fetch calls
    changed = true;
  }

  // 4. Update the _type == "xyz" queries to _type == "xyz" && language == "${locale}"
  // Use regex to match `_type == "xyz"` inside client.fetch
  if (changed || content.includes('_type == "')) {
    content = content.replace(/_type\s*==\s*"([^"]+)"(?!\s*&&\s*language)/g, '_type == "$1" && language == "${locale}"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
