import Head from "next/head";
import {Fragment} from "react"
import LivestockBanner from "../components/livestock/LivestockBanner";

const Livestock = () => {
  return (
        <Fragment>
          <Head>
            <title>Our Livestock | Sikunye</title>
          </Head>
          <LivestockBanner />
        </Fragment>
    );
};
export default Livestock;
