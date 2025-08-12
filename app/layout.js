export const metadata = {
  title: 'Pamela\'s Art Gallery',
  description: 'Discover unique artwork on premium products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
