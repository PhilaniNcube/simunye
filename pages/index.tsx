import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import GetInTouch from '../components/home/GetInTouch'
import HomeHero from '../components/home/HomeHero'
import OurFarm from '../components/home/OurFarm'
import OurProduce from '../components/home/OurProduce'
import WhySection from '../components/home/WhySection'


const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Simunye Agri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <HomeHero />

     <OurProduce />
     <OurFarm />
     <WhySection />
     <GetInTouch />
    </Fragment>
  )
}

export default Home
