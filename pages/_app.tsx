import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Navbar from '../components/layout/Navbar'
import { Fraunces, Barlow } from "@next/font/google";

function MyApp({ Component, pageProps }: AppProps) {
  return (
         <Fragment>
              <Navbar />
              <Component {...pageProps} />
         </Fragment>
         )
}

export default MyApp
