import React, { useEffect, useRef } from "react";
import Footer from "../../layouts/landing/Footer";
import Header from "../../layouts/landing/Header";
import { Cta, FAQ, Feature, Sections } from "./component/HomeSection";
import { PrimaryLink } from "../../components/Link";
import { Link, useLocation } from "react-router-dom";
import { TestimonialCard } from "./component/common/Card";
import { H2, Subtitle } from "../../components/Heading";
import { productData } from "./data/data";

const Home = () => {
  const location = useLocation();
  const section1 = useRef(null);

  useEffect(() => {
    if (location.hash) {
      if (section1.current && location.hash === "#faq-section") {
        section1.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="font-naifty">
      <div
        style={{
          backgroundImage: `url(https://www.wgtn.ac.nz/__data/assets/image/0008/2147471/varieties/ls_medium.jpg)`,
        }}
        className="w-full bg-cover bg-center relative bg-blend-overlay bg-gray-800/80 xl:px-0"
      >
        <Header />
        <div className="max-w-7xl px-4 m-auto pt-32 pb-16 lg:pb-24 lg:pt-48">
          <div className="md:w-[40%] lg:w-1/2 xl:w-[44%]">
            <h1
              className="before:w-full before:h-12 before:bg-gray-600 before:my-auto
              font-extrabold text-4xl mb-4 text-gray-200 lg:text-5xl"
            >
              Empowering students with practical knowledge.
            </h1>
            <Subtitle
              text="A platform that bridges the 
              gap between theoretical learning and real-world application."
            />
            <div className="flex gap-4 mt-8">
              <PrimaryLink goto="/signup" text="Explore">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
              </PrimaryLink>
            </div>
          </div>
        </div>
      </div>

      <Feature />
      <Sections />

      <div className="bg-custom-gray-900 py-12">
        <div className="max-w-7xl px-4 m-auto">
          <div className="max-w-xl mx-auto text-center mb-12">
            <H2 text="Product and Service Offerings" />
            <Subtitle
              text="Harnessing Innovation, Empowering Solutions, and Exceeding
             Every Customer Need with Unparalleled Commitment and Dedication."
            />
          </div>
          <div className="grid place-items-stretch md:grid-cols-2 lg:grid-cols-3">
            {productData.map(({ id, title, subtitle, icon }) => {
              return (
                <ProductCard
                  key={id}
                  title={title}
                  subtitle={subtitle}
                  icon={icon}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Cta />

      <div className="mt-auto py-8 px-4 bg-custom-gray-900 text-custom-white-100 xl:px-0">
        <div className="max-w-7xl mx-auto">
          <TestimonialCard />
        </div>
      </div>

      <section
        id="#faq-section"
        ref={section1}
        className="bg-custom-beige-100/90 rounded-2xl"
      >
        <FAQ />
      </section>
      <Footer />
    </div>
  );
};

const ProductCard = ({ title, subtitle, icon }) => {
  return (
    <Link to="https://naifty.io/" className="flex gap-4 p-4">
      <div className="bg-purple-900/60 rounded-full my-auto p-3">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 fill-purple-300"
          viewBox="0 0 512 512"
        >
          <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
        </svg> */}
        {icon}
      </div>
      <div>
        <h1 className="font-bold text-gray-300 mb-1">{title}</h1>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </Link>
  );
};

export default Home;
