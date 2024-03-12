import React from "react";
import { H2, H3, H4, H5 } from "../../components/Heading";
import Header from "../../layouts/landing/Header";

export const BlogDetail = () => {
  return (
    <>
      <div className="font-naifty">
        <Header />
        <div className="py-8 px-4 bg-custom-gray-900 text-custom-white-100 xl:px-0 min-h-screen">
          <div className="max-w-7xl mx-auto lg:w-3/4 xl:w-1/2 mt-24">
            <H3 text="Unlocking the potencial fo student" />
            <img
              className="w-full h-96 object-cover my-8 rounded-xl"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/how_blockchain_works.jpg"
              alt="blog thumbail"
            />
            <div className="text-sm text-gray-200 px-4">
              <H4 text="Intro" />
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eligendi adipisci cupiditate sit alias! Autem
                voluptatibus impedit consequuntur nulla vero et harum qui amet
                officia iure, officiis veritatis aliquam ut!
              </p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eligendi adipisci cupiditate sit alias! Autem
                voluptatibus impedit consequuntur nulla vero et harum qui amet
                officia iure, officiis veritatis aliquam ut!
              </p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eligendi adipisci cupiditate sit alias! Autem
                voluptatibus impedit consequuntur nulla vero et harum qui amet
                officia iure, officiis veritatis aliquam ut!
              </p>
              <p className="pb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eligendi adipisci cupiditate sit alias! Autem
                voluptatibus impedit consequuntur nulla vero et harum qui amet
                officia iure, officiis veritatis aliquam ut!
              </p>
              <H5 text="Conclusion" />
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eligendi adipisci cupiditate sit alias! Autem
                voluptatibus impedit consequuntur nulla vero et harum qui amet
                officia iure, officiis veritatis aliquam ut!
              </p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eligendi adipisci cupiditate sit alias! Autem
                voluptatibus impedit consequuntur nulla vero et harum qui amet
                officia iure, officiis veritatis aliquam ut!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
