import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const ACC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Backend Intern
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2022 - September 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created robust APIs using Toad and Software AG.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with Front-end, System Analyst, and QA teams in the
          development of an employee attendance website.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Managed tasks efficiently using Monday.com, following Agile methods.
        </li>
      </ul>
    </motion.div>
  );
};

export default ACC;
