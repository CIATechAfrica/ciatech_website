export const metadata = {
  title: 'CIATECH Africa - Content Studio',
  description: 'Manage content for the CIATECH Africa website.',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
