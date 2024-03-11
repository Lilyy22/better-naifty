import { H2 } from "../../../components/Heading";
import { Accordion } from "./common/Accordion";
import { ImgCard, IconCard } from "./common/Card";
import { OneColumnLayout } from "./common/OneColumnLayout";
import { SplitImgLayout } from "./common/SplitImageLayout";

export const Head = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 md:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 md:pr-0 md:mb-0 md:mx-0 md:w-7/12 md:max-w-full md:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 md:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 md:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Everything you
            <br className="hidden md:block" />
            can imagine{" "}
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:max-w-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Sections = () => {
  return (
    <>
      <SplitImgLayout
        img="https://news.uga.edu/wp-content/uploads/2023/10/GettyImages-1440718884.jpg"
        imgAlt="students learning"
        title="Real-World Sucess through practical Learning"
        subtitle="At NAIFTY ACADEMY, we believe in the power of interactive learning to prepare students for real-world challenges. Our courses provide hands-on expertise and practical knowledge that can be applied to solve the problems of today and shape the world of tomorrow."
      />
    </>
  );
};

export const Feature = () => {
  return (
    <>
      <div className="bg-custom-gray-900 py-20 px-4 xl:px-0">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-2 md:flex-nowrap lg:gap-4">
          <div className="w-full md:w-1/3 lg:w-1/3">
            <IconCard
              title="Unlock Your Potential with Naifty"
              subtitle="Gain hands-on expertise and practical knowledge through interactive courses."
              btnText="Learn More"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-6 fill-custom-white-100 my-2"
                viewBox="0 0 448 512"
              >
                <path d="M224 64c-44.2 0-80 35.8-80 80v48H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80V144C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1 .8-42.6-15.2C283.4 82.6 255.9 64 224 64zm32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h64z" />
              </svg>
            </IconCard>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3">
            <IconCard
              title="Prepare for Real-Life Challenges"
              subtitle="Experience experiential learning that bridges the gap between theory and practice."
              btnText="Learn More"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-10 fill-custom-white-100"
                viewBox="0 0 512 512"
              >
                <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" />
              </svg>
            </IconCard>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3">
            <IconCard
              title="Shape the World of Tomorrow"
              subtitle="Equip yourself with the skills to solve the problems of today and create a better future."
              btnText="Learn More"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-10 fill-custom-white-100"
                viewBox="0 0 512 512"
              >
                <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" />
              </svg>
            </IconCard>
          </div>
        </div>
      </div>
    </>
  );
};

export const Cta = () => {
  return (
    <>
      <div className="bg-custom-gray-900 pb-16">
        <div className="max-w-7xl mx-auto">
          <OneColumnLayout
            title="Unlock Your Potential with NAIFTY"
            subtitle="Discover interactive courses and gain practical skills to excel in the real world. Discover interactive courses and gain."
            btnText="Get started"
          />
        </div>
      </div>
    </>
  );
};

export const Service = () => {
  return (
    <>
      <div className="bg-custom-gray-900 py-28 px-2 xl:px-0">
        <div className="max-w-lg mx-auto text-center mb-24">
          <H2 text="Discover New Learning Opportunities" />
          {/* <Subtitle text="Explore our wide range of courses and expand your knowledge." /> */}
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:flex-nowrap md:gap-4 lg:gap-6">
          <div className="w-full md:w-1/3">
            <ImgCard
              img="https://www.simplilearn.com/ice9/free_resources_article_thumb/how_blockchain_works.jpg"
              imgAlt="person working on blockchain"
              title="Advance Blockchain: Uncover the potential of Blockchain"
              subtitle="Uncover the influence of Blockchain and its potential to shape your future."
              btnText="Read More"
            />
          </div>
          <div className="w-full md:w-1/3">
            <ImgCard
              img="https://online.york.ac.uk/wp-content/uploads/2021/07/man-in-a-suit-standing-behind-a-hologram-of-data-analytics-1030x579.jpg"
              imgAlt="Mastering Data Analytics"
              title="Mastering Data Analytics: Unleashing the Power of Data"
              subtitle="Learn how to analyze data effectively and make data-driven decisions."
              btnText="Read More"
            />
          </div>
          <div className="w-full md:w-1/3">
            <ImgCard
              img="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
              imgAlt="person working on blockchain"
              title="The Art of Graphic Design: Creating Visual Masterpieces"
              subtitle="Unleash your creativity and learn the principles of graphic design."
              btnText="Read More"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const FAQ = () => {
  const faqData = [
    {
      i: 1,
      question: "How do I enroll?",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      i: 2,
      question: "What Courses do you offer?",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      i: 3,
      question: "How long are the courses?",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      i: 4,
      question: "Are the courses self-paced?",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      i: 5,
      question: "Do you offer certification?",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
  ];
  return (
    <>
      <div className="py-20 px-4 bg-custom-gray-900 xl:px-0">
        <div className="max-w-4xl mx-auto">
          <H2 text="Frequently Asked Questions" />
          <div className="text-slate-300 rounded mt-8">
            {faqData.map(({ question, content, i }) => {
              return (
                <Accordion question={question} content={content} key={i} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
