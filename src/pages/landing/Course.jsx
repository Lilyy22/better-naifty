import React, { useEffect, useRef } from "react";
import Header from "../../layouts/landing/Header";
import {
  GridFourLayout,
  PricingSection,
  SectionThree,
  Head,
} from "./component/CourseSection";
import Footer from "../../layouts/landing/Footer";
import { useLocation } from "react-router-dom";

export const Course = () => {
  const location = useLocation();
  const section1 = useRef(null);

  useEffect(() => {
    if (location.hash) {
      if (section1.current && location.hash === "#course-section") {
        section1.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="font-naifty">
      <Header />
      <Head />
      <section
        id="#course-section"
        ref={section1}
        className="bg-custom-beige-100/90 rounded-2xl"
      >
        <GridFourLayout />
      </section>
      <PricingSection />
      <SectionThree />
      <Footer />
    </div>
  );
};
