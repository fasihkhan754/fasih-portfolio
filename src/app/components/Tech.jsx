import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Image from "next/image";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <Image
            src={technology.icon}
            alt={technology.name}
            className="w-20 justify-center h-20"
          />
          <p className="justify-center p-2  text-sky-200">{technology.name}</p>
          {/* <BallCanvas icon={technology.icon}/> */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
