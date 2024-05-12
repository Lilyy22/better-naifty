import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LandPrimaryButton,
  LandSecondaryButton,
  SecondaryButton,
} from "../../../components/Button";
import { HorizontalCard, TestimonialCard } from "./common/Card";
import { H1, H2, Subtitle } from "../../../components/Heading";
import { PrimaryLink, SecondaryLink } from "../../../components/Link";
import { CheckedList } from "../../../components/CheckedList";

export const GridFourLayout = () => {
  return (
    <>
      <div className="bg-custom-gray-600 py-16 px-4 lg:py-24 xl:px-0">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
          <div className="mx-auto text-center mb-12 max-w-lg">
            {/* <H2 text="Explore Our Course Catalog" /> */}
            <H2 text="Browse our comprehensice list of courses." />
          </div>
          <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-3">
            <HorizontalCard
              title="Introduction to Programming"
              subtitle="Learn the basics of programming and coding languages."
              date="created 2024-01-01"
              img="https://blogs.ssdntech.com/wp-content/uploads/2019/07/html-tutorial-for-beginners.png"
              imgAlt="course topic"
              authorImg="https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg"
              authorName="John Doe"
            />
            <HorizontalCard
              title="Introduction to Programming"
              subtitle="Learn the basics of programming and coding languages."
              date="created 2024-01-01"
              img="https://images.inc.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg"
              imgAlt="course topic"
              authorImg="https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg"
              authorName="John Doe"
            />
            <HorizontalCard
              title="Introduction to Programming"
              subtitle="Learn the basics of programming and coding languages."
              date="created 2024-01-01"
              img="https://artoftesting.com/wp-content/uploads/2020/04/sql-tutorial-image.jpg"
              imgAlt="course topic"
              authorImg="https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg"
              authorName="John Doe"
            />
            {/* <HorizontalCard
              title="Introduction to Programming"
              subtitle="Learn the basics of programming and coding languages."
              date="2024-01-01"
              img="https://images.inc.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg"
              imgAlt="course topic"
              authorImg="https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg"
              authorName="John Doe"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export const PricingSection = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <>
      <div className="bg-gray-900 py-16 px-4 lg:py-32 xl:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto text-center mb-16">
            <H2 text="Pricing Options" />
            <Subtitle text="Choose the plan that suits your needs." />
            {/* buttons */}
            <div className="flex gap-2 justify-center">
              {monthly ? (
                <>
                  <LandPrimaryButton
                    text="Monthly"
                    handleClick={() => setMonthly(!monthly)}
                  />
                  <LandSecondaryButton
                    text="Yearly"
                    handleClick={() => setMonthly(!monthly)}
                  />
                </>
              ) : (
                <>
                  <LandSecondaryButton
                    text="Monthly"
                    handleClick={() => setMonthly(!monthly)}
                  />
                  <LandPrimaryButton
                    text="Yearly"
                    handleClick={() => setMonthly(!monthly)}
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-6 justify-center relative">
            <motion.div
              initial={{ y: -80 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full md:w-[42%] lg:w-1/3 bg-gray-800 p-6 rounded-xl"
            >
              <h6 className="font-bold text-gray-200">Basic Plan</h6>
              <p className="text-gray-300">
                Perfect for beginners and enthusiasts.
              </p>
              <div className="my-12">
                <H1 text={monthly ? "$19/mo" : "$299/yr"} />
                <SecondaryLink text="Subscribe" goto="/signup" />
              </div>
              <ul className="text-gray-300/80 list-inside">
                <CheckedList text="Interactive learning experience" />
                <CheckedList text="Hands-on practical exercises" />
                <CheckedList text="Real-world case studies" />
              </ul>
            </motion.div>
            {/* cards */}
            <motion.div
              initial={{ y: -60 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 2 }}
              className="w-full md:w-[42%] lg:w-1/3 bg-teal-800 p-6 rounded-xl relative"
            >
              {/* cards */}
              <img
                className="hidden md:block absolute h-32 w-32 -right-12 -top-24 z-0"
                src={require("../../../assets/3d-wave.png")}
              />
              <h6 className="font-bold text-gray-200">Business Plan</h6>
              <p className="text-gray-300">
                Ideal for professionals and entrepreneurs.
              </p>
              <div className="my-12">
                <H1 text={monthly ? "$29/mo" : "$489/yr"} />
                <SecondaryLink text="Subscribe" goto="/signup" />
              </div>
              <ul className="text-gray-300/80 list-disc list-inside">
                <CheckedList text="Advanced skills development" />
                <CheckedList text="Expert-led instruction" />
                <CheckedList text="Industry-relevant projects" />
                <CheckedList text="Networking opportunities" />
                <CheckedList text="Career advancement support" />
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export const SectionThree = () => {
  return (
    <>
      <div className="bg-custom-gray-900 py-16 px-4 lg:py-24 xl:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap mb-8">
            <div>
              <H2 text="Unlock Your Potential with NAIFTY ACADEMY" />
              <p className="mt-4"></p>
              <PrimaryLink
                text="Learn More"
                customStyle="hidden mx-auto lg:inline-block"
                goto="/about"
              />
            </div>
            <div className="lg:w-[70%] xl:w-1/2">
              <p className="text-gray-400 my-4 lg:my-auto">
                At NAIFTY ACADEMY, we believe in providing the best learning
                experience for our students. With expert instructors, flexible
                learning options, and career advancement opportunities, we are
                dedicated to helping you achieve your goals. Our courses are
                designed to bridge the gap between theory and practice, allowing
                you to gain hands-on expertise and apply your skills to
                real-life challenges. Join us today and take the first step
                towards a successful future.
              </p>
              <PrimaryLink
                text="Learn More"
                goto="/about"
                customStyle="lg:hidden"
              />
            </div>
          </div>
          <div className="w-full h-96 overflow-hidden rounded-xl">
            <img
              className="w-full h-96 object-cover object-center rounded-xl transition-all hover:scale-105"
              src="https://www.wgtn.ac.nz/__data/assets/image/0008/2147471/varieties/ls_medium.jpg"
              alt="naifty students"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const Testimonials = () => {
  return (
    <>
      <div className="bg-gray-900 py-16 px-4 lg:py-24 xl:px-0">
        <div className="max-w-xl mx-auto">
          <TestimonialCard
            img="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2021/12/07093036/businessman-conference-room.jpg"
            position="marketing manager"
            name="John Doe"
            text="The courses offered by NAIFTY ACADEMY have truly transformed my understanding of the subject matter. The interactive approach and practical assignments have helped me apply my knowledge in real-world scenarios."
          />
        </div>
      </div>
    </>
  );
};

export const Head = () => {
  return (
    <div className="relative flex flex-col-reverse py-24 lg:pt-0 lg:flex-col lg:pb-0 bg-custom-gray-900">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 md:pr-0 md:mb-0 md:mx-0 md:w-7/12 md:max-w-full md:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden w-44 h-full transform -translate-x-1/2 md:block fill-custom-gray-600"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover object-left w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-full"
          src="https://scc.losrios.edu/scc/main/img/reuse-event-735-414/student-resources/African-American-Studies-Classes-735x414.jpg"
          alt="course"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-8 md:max-w-screen-xl">
        <div className="my-12 lg:my-40 md:max-w-md xl:max-w-lg lg:pr-5">
          <p className="hidden md:inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white bg-custom-purple-700 uppercase rounded-full bg-teal-accent-400">
            courses
          </p>
          <H1 text="Learn your way." />
          <p className="pr-5 mb-6 text-gray-300">
            Explore our course catalog. Explore our course catalog. Explore our
            course catalog. Explore our course catalog. Explore our course
            catalog.
          </p>
          <div className="flex items-center">
            <SecondaryLink text="Explore" goto="/course/#course-section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
                viewBox="0 0 512 512"
              >
                <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
              </svg>
            </SecondaryLink>
          </div>
        </div>
      </div>
    </div>
  );
};
