import { Suspense } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Technologies from "./Components/technologies/Technologies";
import type { Itechnology } from "./types/technologyTypes";


const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}



const technologiesPromise = technologiesFetch();
function App() {

  return (
    <>
      {/* <Nav></Nav>
      <Banner></Banner> */}

      <main>
        <section className="container mx-auto my-10">

          <div className="grid grid-cols-4 gap-5">
            {/* technologies component */}
            <Suspense fallback={<h2>Loading...</h2>}>
              <Technologies technologiesPromise={technologiesPromise}></Technologies>
            </Suspense>
            
            {/* stacking list */}
            <div className="col-span-1">
              <h2>Your Stack</h2>

            </div>
          </div>

        </section>
      </main>



    </>
  )
}

export default App
