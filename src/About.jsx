import React, { Fragment } from "react";
import AboutContent from "./components/About-content/about_content";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";

const About = () => {
  return (
    <Fragment>
      <Header />
      <AboutContent />
      <Footer />
    </Fragment>
  );
};

export default About;
