import Image from 'next/image'
import About from './About'
import Head from 'next/head'
import Script from 'next/script'
export default function Home() {
  return (
    <>
    <Head>
      <title>
        hundting coder
      </title>
    </Head>
    <Script src='./scr.js'  strategy="lazyOnload" ></Script>

    <h1>welcome here</h1>
    <About/>y
    
    </>
  )
}
