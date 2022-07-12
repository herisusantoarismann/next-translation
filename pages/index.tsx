import type { NextPage } from "next";
import Head from "next/head";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import MainLayout from "../layouts/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Translation App</title>
      </Head>
      <MainLayout>
        <div>
          <Header />
          <Content />
        </div>
        <Footer />
      </MainLayout>
    </>
  );
};

export default Home;
