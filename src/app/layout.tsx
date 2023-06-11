import Head from "next/head"
import "./globals.css"

export const metadata = {
  title: 'Intripid',
  description: 'A Travel by Intripid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"  sizes="any"/>
      </Head>
      <body>{children}</body>
    </html>
  )
}
