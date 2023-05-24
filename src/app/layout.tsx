import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { IBM_Plex_Mono } from 'next/font/google'

const ibmPlexMono = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ibmPlexMono'
})

export const metadata = {
  title: 'Rad',
  description: 'Fashion Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} font-mono scroll-smooth text-[62.5%] overflow-x-hidden`}>
      <body className="bg-white h-screen pt-[60px] lg:pt-[100px] text-primary-black">
        <NavBar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
