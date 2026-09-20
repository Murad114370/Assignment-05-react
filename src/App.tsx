import { Suspense, useState } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Technologies from "./Components/technologies/Technologies";
import type { Itechnology } from "./types/technologyTypes";
import StackingList from "./Components/technologies/StackingList";


const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}



const technologiesPromise = technologiesFetch();
function App() {
  const [saved, setSaved] = useState<Itechnology[]>([])

  const handleSavedTechnology = (technology: Itechnology) => {
    // console.log({technology});
    setSaved([...saved, technology])

  }
  // console.log(saved);

  return (
    <>
      {/* <Nav></Nav>
      <Banner></Banner> */}

      <main>
        <section className="container mx-auto my-10">

          {/* Heading */}
          <div className="my-5">
            <h2 className="font-bold text-5xl pb-3">
              Explore <span className="text-[#EC4899]">Technologies</span>
            </h2>
            <p className="text-2xl text-[#64748B]">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          
          {/* Card & Stack */}
          <div className="grid grid-cols-4 gap-5">
            {/* technologies component */}
            <Suspense fallback={<h2>Loading...</h2>}>
              <Technologies
                  handleSavedTechnology={handleSavedTechnology}
                  technologiesPromise={technologiesPromise}></Technologies>
            </Suspense>

            {/* stacking list */}
            <StackingList technologies={saved}></StackingList>
          </div>

        </section>
      </main>



    </>
  )
}

export default App
