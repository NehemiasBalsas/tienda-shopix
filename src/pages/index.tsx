import Image from 'next/image'
import Inicio from "@/components/Inicio"
import { Inter } from 'next/font/google'
import Nav from '@/components/nav/Nav'
import Chat from '@/components/Chat'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Nav />
      <Inicio />
      <Chat />
    </main>
  )
}
