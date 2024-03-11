import { motion } from "framer-motion";
import { LandPrimaryButton, SecondaryButton } from "../../../../components/Button";
import { H1 } from "../../../../components/Heading";

export const OneColumnLayout = ({ title, subtitle, btnText }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#4b1248] to-[#061161] relative py-12 rounded-3xl">
        <motion.img
          initial={{ y: -100 }}
          whileInView={{ y: 10 }}
          transition={{ duration: 1 }}
          src={require("../../../../assets/3d-circle.png")}
          alt="3d wave"
          className="absolute right-16 -top-10 z-0 w-[20%] md:w-[10%] md:right-28"
        />
        <div className="max-w-xl mx-auto text-center py-10 lg:py-12">
          <H1 text={title} />
          {/* <Subtitle text={subtitle} /> */}
          <LandPrimaryButton text={btnText} />
        </div>
      </div>
    </>
  );
};
