import React from "react";

import Hero from "./Components/Hero";
import Trending from "./Components/Trending";
import Skills from "./Components/Skills";
import Content from "./Components/Content";
import Career from "./Components/Career";
import Internship from "./Components/Internship";
import Inteerview from "./Components/Inteerview";
import Resume from "./Components/Resume";
import Coach from "./Components/Coach";
import Feedback from "./Components/Feedback";
import Unlock from "./Components/Unlock";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
    
      <Trending />
      <Skills />
      <Content />
      <Career />
      <Inteerview />
      <Internship />
      <Resume />
      <Coach />
      <Feedback />
      <Unlock />
      <Footer />
    </div>
  );
};

export default Home;
