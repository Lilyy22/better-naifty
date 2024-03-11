import React from "react";
import Header from "../../layouts/landing/Header";
import Footer from "../../layouts/landing/Footer";
import { Hero, Mission, Partners, Team } from "./component/AboutSection";

export const About = () => {
  return (
    <div className="font-naifty">
      <Header />
      <Hero />
      <Partners />
      <Mission />
      <Team />
      <Footer />
    </div>
  );
};
