import { PrimaryButton, SecondaryButton } from "../../../../components/Button";
import { H2 } from "../../../../components/Heading";
import { motion } from "framer-motion";

export const SplitImgLayout = ({ img, imgAlt, title, subtitle }) => {
  return (
    <>
      <div className="bg-custom-gray-900 px-4 lg:py-24 xl:px-0">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="mb-8 lg:mb-0 rounded-3xl overflow-hidden w-full bg-custom-black-600 p-4 mt-12 border border-gray-600/80 lg:w-[50%] lg:mt-0 lg:p-8"
          >
            <img
              src={img}
              alt={imgAlt}
              className="w-full object-cover rounded-3xl transition-all hover:scale-105"
            />
          </motion.div>
          <div className="w-full lg:w-[40%] my-auto">
            <H2 text={title} />
            {/* <Subtitle text={subtitle} /> */}
            <div className="flex gap-4 pt-8">
              <PrimaryButton type="button" text="Explore">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
              </PrimaryButton>
              <SecondaryButton type="button" text="Sign up">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                </svg>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
