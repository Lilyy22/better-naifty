import React from "react";
import Header from "../../layouts/landing/Header";
import {
  GridFourLayout,
  PricingSection,
  SectionThree,
  Testimonials,
  Head
} from "./component/CourseSection";
import Footer from "../../layouts/landing/Footer";

export const Course = () => {
  return (
    <div className="font-naifty">
      <Header />
      <Head />
      <GridFourLayout />
      <PricingSection />
      <SectionThree />
      <Testimonials />
      <Footer />
    </div>
  );
};
