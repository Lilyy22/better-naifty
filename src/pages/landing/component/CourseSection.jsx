import React from "react";
import { motion } from "framer-motion";
import { LandPrimaryButton, SecondaryButton } from "../../../components/Button";
import { HorizontalCard, TestimonialCard } from "./common/Card";
import { H1, H2 } from "../../../components/Heading";

export const GridFourLayout = () => {
  return (
    <>
      <div className="bg-custom-gray-600 py-16 px-4 lg:py-24 xl:px-0">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
          <div className="mx-auto text-center mb-12">
            {/* <H2 text="Explore Our Course Catalog" /> */}
            {/* <Subtitle text="Browse our comprehensice list of courses." /> */}
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
        <div className="mt-8 flex justify-center">
          <LandPrimaryButton text="View all" />
        </div>
      </div>
    </>
  );
};

export const PricingSection = () => {
  return (
    <>
      <div className="bg-gray-900 py-16 px-4 lg:py-32 xl:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto text-center mb-16">
            <H2 text="Pricing Options" />
            {/* <Subtitle text="Choose the plan that suits your needs." /> */}
            {/* buttons */}
            <div className="flex gap-2 justify-center">
              <LandPrimaryButton text="Monthly" />
              <SecondaryButton text="Yearly" />
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
                <H1 text="$19/mo" />
                <LandPrimaryButton text="Subscribe" />
              </div>
              <ul className="text-gray-300/80 list-disc list-inside">
                <li className="mb-2">Interactive learning experience</li>
                <li className="mb-2">Hands-on practical exercises</li>
                <li className="mb-2">Real-world case studies</li>
              </ul>
            </motion.div>
            {/* cards */}
            <motion.div
              initial={{ y: -60 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 2 }}
              className="w-full md:w-[42%] lg:w-1/3 bg-purple-900/70 p-6 rounded-xl relative"
            >
              {/* cards */}
              <img
                className="hidden md:block grayscale absolute h-32 w-32 -right-12 -top-24 z-0"
                src={require("../../../assets/3d-wave.png")}
              />
              <h6 className="font-bold text-gray-200">Business Plan</h6>
              <p className="text-gray-300">
                Ideal for professionals and entrepreneurs.
              </p>
              <div className="my-12">
                <H1 text="$29/mo" />
                <LandPrimaryButton text="Subscribe" />
              </div>
              <ul className="text-gray-300/80 list-disc list-inside">
                <li className="mb-2">Advanced skills development</li>
                <li className="mb-2">Expert-led instruction</li>
                <li className="mb-2">Industry-relevant projects</li>
                <li className="mb-2">Networking opportunities</li>
                <li className="mb-2">Career advancement support</li>
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
              <LandPrimaryButton
                text="Learn More"
                customStyle="hidden lg:block"
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
              <LandPrimaryButton text="Learn More" customStyle="lg:hidden" />
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
          className="absolute left-0 hidden h-full transform -translate-x-1/2 md:block fill-custom-gray-600"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover object-center w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-full"
          src="https://img.freepik.com/free-photo/young-person-taking-notes-textbook-paper-with-pen-looking-modern-laptop-woman-writing-information-notebook-files-doing-remote-work-adult-working-from-home-business_482257-27948.jpg?w=1380&t=st=1706522543~exp=1706523143~hmac=3196353f024db0a12381374cc7ac8bf8d5cff263edfddc571e0d11906cbc9f5c"
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
            <SecondaryButton text="Explore" />
          </div>
        </div>
      </div>
    </div>
  );
};
