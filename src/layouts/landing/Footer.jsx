import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { Subscription } from "./Subscription";

const Footer = () => {
  return (
    <>
      <footer className="mt-auto py-8 px-4 bg-gray-900 text-custom-white-100 lg:py-16 xl:px-0 border-t border-gray-700/70">
        <div className="max-w-7xl mx-auto">
          <nav className="w-full flex flex-wrap justify-between pb-12">
            <div className="w-full mb-6 md:w-[20%] lg:w-[15%]">
              <Logo />
            </div>
            <div className="w-1/2 mb-6 md:w-[15%] lg:w-[10%]">
              <h2 className="font-bold mb-4">About us</h2>
              <ul className="text-gray-400">
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/course">Courses</Link>
                </li>
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/courses">Contact Us</Link>
                </li>
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/#faq-section">FAQs</Link>
                </li>
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/">Support</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 mb-6 md:w-[15%] lg:w-[10%]">
              <h2 className="font-bold mb-4">Resources</h2>
              <ul className="text-gray-400">
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/">Help Center</Link>
                </li>
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/">Terms</Link>
                </li>
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/">Privacy</Link>
                </li>
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/">Careers</Link>
                </li>
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/">Partners</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 mb-6 md:w-[15%] lg:w-[10%]">
              <h2 className="font-bold mb-4">Events</h2>
              <ul className="text-gray-400">
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/">Press</Link>
                </li>
                <li className="pb-2 hover:text-gray-500">
                  <Link to="/">Sitemap</Link>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[40%] xl:w-1/3">
              <Subscription />
              <p className="text-gray-300 text-xs my-2">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
              <p className="text-xs text-gray-400/90">
                &#169; {new Date().getFullYear()} Naifty Academy. All rights
                reserved.
              </p>
            </div>
          </nav>
          <div className="w-full flex flex-wrap justify-between border-t border-gray-700 pt-4">
            <ul className="flex text-xs gap-2 mb-4 md:mb-0 md:gap-4">
              <li className="text-gray-400 transition hover:text-gray-500">
                <NavLink>Cookie Settings</NavLink>
              </li>
              <li className="text-gray-400 transition hover:text-gray-500">
                <NavLink>Privacy Policy</NavLink>
              </li>
              <li className="text-gray-400 transition hover:text-gray-500">
                <NavLink>Terms of Service</NavLink>
              </li>
            </ul>
            <div className="flex gap-4">
              <NavLink
                className="text-gray-400 transition hover:text-gray-500"
                to="https://facebook.com/pivotskool"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> facebook </span>

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </NavLink>

              <NavLink
                className="text-gray-400 transition hover:text-gray-500"
                to="https://www.linkedin.com/company/pivotskool"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Linkedin</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </NavLink>

              <NavLink
                className="text-gray-400 transition hover:text-gray-500"
                to="https://twitter.com/PivotSkool"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </NavLink>

              <NavLink
                className="text-gray-400 transition hover:text-gray-500"
                to="https://t.me/pivotskool"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Telegram </span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 496 512"
                >
                  <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
                </svg>
              </NavLink>

              <NavLink
                className="text-gray-400 transition hover:text-gray-500"
                to="https://instagram.com/pivotskool"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
