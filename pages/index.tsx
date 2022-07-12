import type { NextPage } from "next";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import MainLayout from "../layouts/main";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>
        <Header />
        <Content />
      </div>
      <Footer />
    </MainLayout>
  );
};

export default Home;
