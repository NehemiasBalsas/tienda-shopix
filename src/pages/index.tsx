import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Nav />
      
    </main>
  )
}
