import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";
import Navbar from '../components/layout/Navbar'
import { Fraunces, Barlow } from "@next/font/google";
import { GTM_ID, pageview } from "../lib/gtm";
import { useRouter } from 'next/router';
import analytics from "../utils/analytics";

function MyApp({ Component, pageProps }: AppProps) {


  React.useEffect(() => {
    analytics.page();
  }, []);

  return (
    <>
      {/* Google Tag Manager - Global base code */}

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
