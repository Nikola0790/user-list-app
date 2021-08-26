import React from "react";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import Users from "./components/Users/users";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Users />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
