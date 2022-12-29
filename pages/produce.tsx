import Head from "next/head";
import { Fragment } from "react";
import ProduceGrid from "../components/produce/ProduceGrid";
import dynamic from "next/dynamic";
import ProduceHero from "../components/produce/ProduceHero";

const Grid = dynamic(() => import("../components/produce/ProduceGrid"));

const Produce = () => {
  return (
    <Fragment>
      <Head>
        <title>Our Produce | Sikunye</title>
      </Head>
      <ProduceHero />
      <Grid />
    </Fragment>
  );
};
export default Produce;
