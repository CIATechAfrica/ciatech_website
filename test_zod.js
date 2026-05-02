const { z } = require('zod');

const schema = z.object({ email: z.string().email() });
const parsed = schema.safeParse({ email: 'bad' });

console.log(parsed.error);
if (!parsed.success) {
console.log(parsed.error.issues[0].message);
  console.log(parsed.error.issues[0].message);
}
