import Head from "next/head";
import { Fragment } from "react";
import ProduceHero from "../components/produce/ProduceHero";

const Produce = () => {
  return <Fragment>
    <Head>
      <title>Our Produce | Sikunye</title>
    </Head>
    <ProduceHero />
  </Fragment>;
};
export default Produce;
