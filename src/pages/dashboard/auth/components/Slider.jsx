import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { H2, Subtitle } from "../../../../components/Heading";
import { useLocation } from "react-router-dom";

export const Slider = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Slider with indicators outside --> */}
      <div className="relative w-full glide-05">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-nowrap relative flex justify-between w-full overflow-hidden p-0">
            <li className="my-auto w-full">
              <H2
                text={
                  currentPath === "/signup/instructor"
                    ? "Join Our Team of Educators."
                    : "Unlock Your Potential with NAIFTY"
                }
              />
              <Subtitle
                text={
                  currentPath === "/signup/instructor"
                    ? "Teach and transform lives, get instant access to our community and students."
                    : "Discover interactive courses and gain practical skills to excel in the real world."
                }
              />
            </li>
            <li className="w-full">
              <img
                src={require("../../../../assets/veect.png")}
                className="w-full max-w-full max-h-full m-auto brightness-75"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with indicators outside --> */}
    </>
  );
};
