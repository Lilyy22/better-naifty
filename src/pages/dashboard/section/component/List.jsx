import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToolTip } from "../../../../components/ToolTip";

export const SectionDropDown = ({ section, episodes, enrolled }) => {
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
                {episodes.map(({ title, id }) => {
                  return (
                    <Link
                      to={`/dashboard/courses/section/episode/${id}`}
                      onClick={(e) => (enrolled ? "" : e.preventDefault())}
                      className={
                        enrolled
                          ? "hover:text-purple-500 hover:font-medium"
                          : "text-red-900 relative group"
                      }
                      state={{ episodeId: id }}
                      disabled={enrolled ? false : true}
                      key={id}
                    >
                      {!enrolled && <ToolTip text="Enroll to unlock course" />}
                      <li className="flex gap-2 mt-2 text-xs rounded-md ">
                        {enrolled ? (
                          <svg
                            className="w-3 h-3 fill-current my-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-3 h-3 fill-current my-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                          </svg>
                        )}
                        <div className="flex justify-between flex-1">
                          <span>{title}</span>
                          <span>4:30</span>
                        </div>
                      </li>
                    </Link>
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
