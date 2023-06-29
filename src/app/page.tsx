import Image from 'next/image'
import { Header } from '@/components/header'
import { BlurTop } from '../components/blurTop';
import { Main } from './../components/greatCoffe';
import { BlurBottom } from './../components/blurBottom';
import {BlurMobile} from './../components/blurMobile';

export default function Home() {
  return (
    <body className="overflow-hidden w-full sm:bg-background">
      <Header/>
      <Main></Main>
      <BlurTop></BlurTop>
      <BlurBottom/>
      <BlurMobile/>
    </body>
  )
}
