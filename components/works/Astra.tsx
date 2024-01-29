import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Astra = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Fullstack Developer
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        April 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Responsible for designing and implementing both the frontend and
          backend components of web applications using React js, Vue js and
          Express js.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrate website with Meta Graph API for whatsapp business management
          system.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Maintain serverless services using AWS Lambda.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborate with cross functional teams, including Product, QA and
          Fullstack in a Scrum Agile squad based environment.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Utilize Jira and Microsoft Azure for efficient task management
        </li>
      </ul>
    </motion.div>
  );
};

export default Astra;
