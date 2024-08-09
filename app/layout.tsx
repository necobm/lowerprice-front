import './globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <body>{children}</body>
      </html>
    )
}