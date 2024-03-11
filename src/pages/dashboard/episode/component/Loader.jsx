import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-between">
        <div className="w-full lg:w-[63%]">
          <div className="bg-white mb-4 rounded-lg">
            <div className="md:h-72 bg-gray-400"></div>
            <div className="p-6">
              <p className="w-24 bg-gray-200 p-2 rounded mb-4"></p>
              <p className="w-full bg-gray-200 p-2 rounded mb-2"></p>
              <p className="w-full bg-gray-200 p-2 rounded mb-2"></p>
              <p className="w-full bg-gray-200 p-2 rounded mb-2"></p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="bg-white rounded-lg flex-1 p-6 mb-auto">
          {/* <DashH4 text="Contents" /> */}
          {/* <ol className="list-decimal list-outside">
            {faqData.map(({ section, id, episodes }) => {
              return (
                <SectionDropDown
                  key={id}
                  section={section}
                  episodes={episodes}
                />
              );
            })}
          </ol> */}
        </div>
      </div>
    </>
  );
};
