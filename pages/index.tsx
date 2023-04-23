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
        <title>Sikunye Agro</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="facebook-domain-verification"
          content="f1pq663cpokz4078bb0wz3y1p8pdj7"
        />
      </Head>
      <HomeHero />

      <OurProduce />
      <OurFarm />
      <WhySection />
      <GetInTouch />
    </Fragment>
  );
}

export default Home
