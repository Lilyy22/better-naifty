import { H2, Subtitle } from "../../../components/Heading";
import { ImgCard } from "./common/Card";
import { motion } from "framer-motion";

export const BlogList = () => {
  return (
    <>
      <div className="bg-gray-900 py-24 px-4 lg:py-32 xl:px-0">
        <div className="max-w-lg m-auto text-center mb-24">
          <H2 text="Explore our Blog posts." />
          <Subtitle text="Stay updated with our latest articles and posts on the field." />
        </div>
        <div className="mb-16 max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:flex-nowrap md:gap-4 lg:gap-6">
          <motion.div
            initial={{ y: -90 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/3 group"
          >
            <ImgCard
              img="https://www.simplilearn.com/ice9/free_resources_article_thumb/how_blockchain_works.jpg"
              imgAlt="person working on blockchain"
              title="Advance Blockchain: Uncover the potential of Blockchain"
              subtitle="Uncover the influence of Blockchain and its potential to shape your future."
              btnText="Read More"
            />
          </motion.div>
          <motion.div
            initial={{ y: -70 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full md:w-1/3"
          >
            <ImgCard
              img="https://online.york.ac.uk/wp-content/uploads/2021/07/man-in-a-suit-standing-behind-a-hologram-of-data-analytics-1030x579.jpg"
              imgAlt="Mastering Data Analytics"
              title="Mastering Data Analytics: Unleashing the Power of Data"
              subtitle="Learn how to analyze data effectively and make data-driven decisions."
              btnText="Read More"
            />
          </motion.div>
          <motion.div
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 2 }}
            className="w-full md:w-1/3"
          >
            <ImgCard
              img="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
              imgAlt="person working on blockchain"
              title="The Art of Graphic Design: Creating Visual Masterpieces"
              subtitle="Unleash your creativity and learn the principles of graphic design."
              btnText="Read More"
            />
          </motion.div>
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
