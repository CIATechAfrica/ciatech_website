export const metadata = {
  title: 'CIATech Studio',
  description: 'Sanity Studio for CIATech',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
