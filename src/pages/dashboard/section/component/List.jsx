import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { EpisodeText } from "../../episode/component/EpisodeText";

export const SectionDropDown = ({ section, episodes, enrolled, courseId }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <li
        className={`${
          isActive ? "text-purple-900 cursor-pointer " : ""
        }"last:mb-0 last:border-0 mb-2 px-4 py-2 border-b border-gray-100 rounded-lg bg-gray-100/70 cursor-pointer "`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="flex justify-between">
          <span className="font-semibold text-sm">{section}</span>
          <svg
            className={`w-[0.4rem] fill-current transition-all ${
              isActive ? "rotate-90" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <ul className="list-outside rounded-b-md mt-4 mx-2">
                {episodes?.map(({ title, id }) => {
                  return (
                    <EpisodeText
                      key={id}
                      episodeId={id}
                      title={title}
                      enrolled={enrolled}
                      courseId={courseId}
                    />
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};
