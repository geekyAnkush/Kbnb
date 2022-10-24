import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Head>
        <title>KBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
