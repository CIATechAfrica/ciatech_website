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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>{children}</body>
    </html>
  )
}
