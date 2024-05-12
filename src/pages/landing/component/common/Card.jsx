import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../../../../components/Button";
import { H5, Subtitle } from "../../../../components/Heading";
import { motion } from "framer-motion";
import { SecondaryLink } from "../../../../components/Link";

export const IconCard = ({ title, subtitle, btnText, children, goto }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="rounded-2xl border-t border-gray-700 p-6
        transition-all hover:-mt-2 bg-custom-gray-600 md:p-4 lg:p-6"
      >
        {children}
        <H5 text={title} />
        <Subtitle text={subtitle} />
        <SecondaryLink text={btnText} goto={goto}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="9"
            viewBox="0 0 320 512"
            className="my-auto fill-current"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </SecondaryLink>
      </motion.div>
    </>
  );
};

export const ImgCard = ({ title, subtitle, btnText, img, imgAlt }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-custom-gray-600 rounded-3xl transition-all border border-gray-800 hover:-mt-2 group"
      >
        <motion.div className="w-full overflow-hidden rounded-t-3xl">
          <img
            src={img}
            alt={imgAlt}
            className="w-full h-64 object-cover rounded-t-3xl object-center transition-all group-hover:scale-110"
          />
        </motion.div>
        <motion.div className="p-6 md:p-4 lg:p-6">
          <H5 text={title} />
          {/* <Subtitle text={subtitle} /> */}
          <OutlineButton text={btnText} goto="/blog-read">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="9"
              viewBox="0 0 320 512"
              className="my-auto fill-current"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </OutlineButton>
        </motion.div>
      </motion.div>
    </>
  );
};

export const HorizontalCard = ({
  title,
  subtitle,
  img,
  imgAlt,
  authorImg,
  authorImgAlt,
  authorName,
  date,
}) => {
  return (
    <>
      <Link className="transition-all hover:-mt-4 group">
        <motion.div className="rounded-xl bg-custom-gray-900 w-full border border-purple-900/60 mx-auto hover:bg-custom-gray-600 md:w-auto">
          <motion.div className="w-full h-44 rounded-3xl">
            <img
              className="w-full h-full object-cover object-center rounded-t-xl grayscale group-hover:grayscale-0 border-l border-gray-700"
              src={img}
              alt={imgAlt}
            />
          </motion.div>
          <motion.div className="my-auto p-4">
            <div className="flex gap-1 my-2">
              <svg
                className="w-3 h-3 fill-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg
                className="w-3 h-3 fill-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg
                className="w-3 h-3 fill-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg
                className="w-3 h-3 fill-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <svg
                className="w-3 h-3 fill-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-200">{title}</h2>
            <p className="pt-1 text-sm text-gray-300/80">{subtitle}</p>
            <motion.div className="flex gap-2 mt-8">
              <img
                className="w-10 h-10 object-cover object-center rounded-full"
                src={authorImg}
                alt={authorImgAlt}
              />
              <motion.div className="my-auto">
                <h6 className="text-sm font-bold text-gray-300">
                  {authorName}
                </h6>
                <p className="text-xs text-gray-400">{date}</p>
                {/* full */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg> */}
                {/* half */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
                </svg> */}
                {/* empty */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg> */}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Link>
    </>
  );
};

export const TestimonialCard = () => {
  const [toggle, setToggle] = useState(true);

  const handleMore = (e) => {
    setToggle(!toggle);
  };

  return (
    <>
      <section className="mb-10 pb-12">
        <div className="text-center max-w-md mx-auto mb-12">
          <span className="bg-custom-pink-500/30 rounded-2xl px-4 py-1 text-sm my-4">
            Testimonials
          </span>
          <h1 className="capitalize font-extrabold text-3xl my-4">
            What our Learners Say.
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center lg:justify-evenly">
          <div className="max-w-xs lg:max-w-sm rounded-xl bg-custom-gray-600 px-4 py-6 lg:py-6 lg:px-6">
            <p className="text-gray-400/80 py-4">
              NAIFTY Academy's focus on practical knowledge enabled me to
              develop a professional resume that truly showcased my skills. The
              hands-on learning and interactive courses were instrumental in
              helping me stand out to potential employers. I highly recommend
              their transformative educational approach.👍🏽
            </p>
            <div className="flex gap-2">
              <img
                src="https://www.imilap.com/profileimages/profile_11%20SDN_01553%20copy.jpg"
                className="rounded-full w-10 h-10 object-cover"
                loading="lazy"
                alt="Ravi Singh profile"
              />
              <div className="text-gray-300">
                <p className="font-bold leading-tight">Ravi Singh</p>
                <small>@India</small>
              </div>
            </div>
          </div>

          <div className="max-w-xs lg:max-w-sm rounded-xl bg-custom-gray-600 px-4 py-6 lg:py-6 lg:px-6">
            <p className="text-gray-400/80 py-4">
              With NAIFTY Academy, I gained the hands-on expertise necessary to
              enhance my resume and skills in data analytics. Their approach to
              blending theoretical learning with real-world application was
              exactly what I needed to secure my first role as a Data Analyst.
            </p>
            <div className="flex gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvhUepooGAV_6kntAF0yr9c9T82dCXtqVPjYFiavGWGQKpNhxpB--UJJFxDXt89QIA_c&usqp=CAU"
                className="rounded-full w-10 h-10 object-cover"
                loading="lazy"
                alt="Abel Tekle profile"
              />
              <div>
                <p className="font-bold leading-tight">Abel Tekle</p>
                <small>@Ethiopia</small>
              </div>
            </div>
          </div>

          <div className="max-w-xs lg:max-w-sm rounded-xl bg-custom-gray-600 px-4 py-6 lg:py-6 lg:px-6">
            <p className="text-gray-400/80 py-4">
              The real-world focused training and expert guidance at NAIFTY
              Academy empowered me to tackle complex challenges and build a
              significant portfolio. Their courses not only boosted my
              confidence but also made me a standout candidate to employers.
            </p>
            <div className="flex gap-2">
              <img
                src="https://media.istockphoto.com/id/1279504799/photo/businesswomans-portrait.jpg?s=612x612&w=0&k=20&c=I-54ajKgmxkY8s5-myHZDv_pcSCveaoopf1DH3arv0k="
                className="rounded-full w-10 h-10 object-cover"
                loading="lazy"
                alt="Emily Tremblay Profile"
              />
              <div>
                <p className="font-bold leading-tight">Emily Tremblay</p>
                <small>@Canada</small>
              </div>
            </div>
          </div>
        </div>

        {toggle && (
          <div className="mx-auto w-48 mt-8">
            <Link
              className="rounded-xl px-4 py-1 md:px-6 md:py-2 bg-white text-black border border-custom-blue-500 transition delay-150 hover:scale-105 hover:shadow-xl ease-out"
              onClick={handleMore}
            >
              View More
            </Link>
          </div>
        )}
        <div
          className={`${
            toggle ? "hidden" : ""
          } flex flex-wrap md:flex-nowrap gap-2 justify-center lg:justify-evenly mt-8`}
        >
          <div className="max-w-xs lg:max-w-sm rounded-xl bg-custom-gray-600 px-4 py-6 lg:py-6 lg:px-6">
            <p className="text-gray-400/80 py-4">
              Thanks to NAIFTY Academy, I mastered crucial practical skills
              through their interactive engineering courses, which were crucial
              in helping me land a dream job with a top tech company. The
              academy's emphasis on real-world application made all the
              difference.
            </p>
            <div className="flex gap-2">
              <img
                src="https://pbs.twimg.com/profile_images/1457243657963245568/ozO7R_Ct_400x400.jpg"
                className="rounded-full w-10 h-10 object-cover"
                loading="lazy"
                alt="Katarzyna Nowak profile"
              />
              <div className="text-gray-300">
                <p className="font-bold leading-tight">Katarzyna Nowak</p>
                <small>@Poland</small>
              </div>
            </div>
          </div>

          <div className="max-w-xs lg:max-w-sm rounded-xl bg-custom-gray-600 px-4 py-6 lg:py-6 lg:px-6">
            <p className="text-gray-400/80 py-4">
              Choosing NAIFTY Academy was pivotal for transitioning my career
              towards data analytics. The experiential learning environment
              helped me clarify my career goals and develop actionable
              strategies to achieve them, ultimately landing my dream job.🧠
            </p>
            <div className="flex gap-2">
              <img
                src="https://images.unsplash.com/photo-1618517047977-854f5c4b6976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdoaXRlJTIwbWFufGVufDB8fDB8fHww&w=1000&q=80"
                className="rounded-full w-10 h-10 object-cover"
                loading="lazy"
                alt="Liam Smith profile"
              />
              <div className="text-gray-300">
                <p className="font-bold leading-tight">Liam Smith</p>
                <small>@Australia</small>
              </div>
            </div>
          </div>

          <div className="max-w-xs lg:max-w-sm rounded-xl bg-custom-gray-600 px-4 py-6 lg:py-6 lg:px-6">
            <p className="text-gray-400/80 py-4">
              NAIFTY Academy's hands-on training in product analysis were
              valuable. Their focus on practical learning prepared me perfectly
              for the real-world challenges of my first job, boosting both my
              confidence and my communication skills.
            </p>
            <div className="flex gap-2">
              <img
                src="https://www.aufini.com/image/95944.jpg?height=280&width=280&autorotate=true&mode=crop"
                className="rounded-full w-10 h-10 object-cover"
                loading="lazy"
                alt="Lucas Silva Profile"
              />
              <div className="text-gray-300">
                <p className="font-bold leading-tight">Lucas Silva</p>
                <small>@Brazil</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const TeamCard = ({
  photo,
  position,
  name,
  description,
  linked,
  twitter,
}) => {
  return (
    <>
      <div className="w-64 p-4 rounded-lg text-gray-400 bg-custom-black-900 bg-custom-gray-600 border-t border-gray-700 hover:bg-custom-black-600 group hover:bg-gray-900">
        <img
          className="rounded-full w-44 h-44 object-cover mx-auto group-hover:scale-105"
          src={require(`../../../../assets/team-img/${photo}`)}
          alt=""
        />
        <div className="text-center mt-4">
          <p className="text-xs my-1">{position}</p>
          <p className="font-bold text-gray-300">{name}</p>
          <p className="text-sm my-6 text-gray-500 group-hover:text-gray-400">
            {description}
          </p>
          <div className="font-bold flex justify-center gap-1 mt-4">
            <a href={linked}>
              <svg
                className="w-5 h-4 fill-gray-500 hover:fill-purple-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
            <a href={twitter}>
              <svg
                className="w-5 h-4 fill-gray-500 hover:fill-purple-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
