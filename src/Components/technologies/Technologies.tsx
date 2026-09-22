import { use} from "react";


import type { Itechnology } from "../../types/technologyTypes";
import TechnologiesCard from "./TechnologiesCard";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
  handleSavedTechnology: (technology: Itechnology) => void
  saved: Itechnology[]
}

const Technologies = ({ technologiesPromise, handleSavedTechnology, saved }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  
  return (
    <div className="col-span-3 " >

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {technologies.length === 0 ? ( 
            <p >No technologies selected yet.</p>
        ) : ( 
          technologies.map((singleTechnology) => (
            <TechnologiesCard 
                key={singleTechnology.id} 
                technology={singleTechnology}
                handleSavedTechnology={handleSavedTechnology}
                saved={saved}
            ></TechnologiesCard>
          ))
        )}

      </div>

    </div>
  );
};

export default Technologies;
