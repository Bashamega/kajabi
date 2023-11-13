import { Inter } from 'next/font/google'
import './global.sass'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kajabi',
  description: 'Kajabi powerful all in one platform gives you everything you need to create, market, and sell you online course.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
