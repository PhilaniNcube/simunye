import Head from "next/head";
import { Fragment } from "react";
import AboutHero from "../components/about/AboutHero";
import Story from "../components/about/Story";

const AboutUs = () => {
  return <Fragment>
    <Head>
      <title>About Us | Sikunye</title>
    </Head>
    <AboutHero />
    <Story />
  </Fragment>;
};
export default AboutUs;
