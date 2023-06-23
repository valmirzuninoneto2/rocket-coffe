import Image from 'next/image'
import { Header } from '@/components/header'
import { BlurTop } from '../components/blurTop';
import { Main } from './../components/greatCoffe';
import { BlurBottom } from './../components/blurBottom';
export default function Home() {
  return (
    <body className="overflow-hidden w-full bg-background">
      <Header/>
      <Main></Main>
      <BlurTop></BlurTop>
      <BlurBottom/>
    </body>
  )
}
