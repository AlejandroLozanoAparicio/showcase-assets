import './global.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <header></header>
        {children}
        <footer></footer>
      </body>
    </html>
  )
}
