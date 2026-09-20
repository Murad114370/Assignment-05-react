import React, { use, useState } from "react";
import { toast } from "react-toastify";

import type { Itechnology } from "../../types/technologyTypes";
import TechnologiesCard from "./TechnologiesCard";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  
  return (
    <div className="col-span-3 ">

      <div>
        <h2 className="font-bold text-5xl pb-3">
        Explore <span className="text-[#EC4899]">Technologies</span>
      </h2>
      <p className="text-2xl text-[#64748B]">
        Pick one technology per category to build your ideal stack.
      </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {technologies.length === 0 && (
            <p >No technologies selected yet.</p>
        )}

        {technologies.map((singleTechnology) => (
            <TechnologiesCard key={singleTechnology.id} technology={singleTechnology}></TechnologiesCard>
        ) )}
      </div>

    </div>
  );
};

export default Technologies;
