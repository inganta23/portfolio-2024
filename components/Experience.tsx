import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ACC from "./works/ACC";
import Pegi from "./works/Pegi";
import Astra from "./works/Astra";

const Experience = () => {
  const [workAstra, setWorkAstra] = useState(true);
  const [workPegi, setWorkPegi] = useState(false);
  const [workACC, setWorkACC] = useState(false);

  const handleAstra = () => {
    setWorkAstra(true);
    setWorkPegi(false);
    setWorkACC(false);
  };

  const handlePegi = () => {
    setWorkAstra(false);
    setWorkPegi(true);
    setWorkACC(false);
  };

  const handleACC = () => {
    setWorkAstra(false);
    setWorkPegi(false);
    setWorkACC(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleAstra}
            className={`${
              workAstra
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            PT Astra International Tbk
          </li>
          <li
            onClick={handlePegi}
            className={`${
              workPegi
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Pegipegi
          </li>
          <li
            onClick={handleACC}
            className={`${
              workACC
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Astra Credit Companies (ACC)
          </li>
        </ul>
        {workAstra && <Astra />}
        {workPegi && <Pegi />}
        {workACC && <ACC />}
      </div>
    </section>
  );
};

export default Experience;
