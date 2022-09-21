import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='min-h-scren min-w-full  bg-gray-900 '>
      <Head>
        <title>Eviatejs</title>
        <meta name="description" content="The next-gen backend frameworl" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  ]
     <Navbar/>
     <Hero/>
     <Footer/>
    
    </div>
  )
}

export default Home
