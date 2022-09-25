import type { NextPage } from 'next'
import Head from 'next/head'
import Features from '../components/Features'
import Footer from '../components/footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='min-h-scren min-w-full  bg-[#18181B] '>
      <Head>
        <title>Eviatejs</title>
        <meta name="description" content="The next-gen backend frameworl" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Navbar/>
    <Hero/>
    <Features/>
    <Footer/>
    </div>
  )
}

export default Home
