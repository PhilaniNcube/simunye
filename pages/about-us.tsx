
import Head from "next/head";
import AboutHero from "../components/about/AboutHero";
import Story from "../components/about/Story";

const AboutUs = () => {
  return (
  <>
    <Head>
      <title>About Us | Sikunye</title>
    </Head>
    <AboutHero />
    <Story />
  </>
  );
};
export default AboutUs;
