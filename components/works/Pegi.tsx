import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Pegi = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Engineer Intern
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        August 2022 - January 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented UI/UX designs using Vue.js and Nuxt.js.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated in Scrum Agile squads with Product, QA, UI/UX and Backend
          teams for comprehensive feature testing befre release.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Wrote clean and reusable code.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Efficiently managed tasks with Jira and Github.
        </li>
      </ul>
    </motion.div>
  );
};

export default Pegi;
