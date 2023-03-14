import './globals.css'

export const metadata = {
  title: 'JHB Digital B2B Social Media Marketing',
  description: 'JHB digital is a B2B social media marketing agency helping B2B coaches, consultants, and agency owners scale their marketing with no effort, all you have to do is hit record.',
}

export default function RootLayout({
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
