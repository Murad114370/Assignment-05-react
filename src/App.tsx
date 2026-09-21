import { Suspense, useState } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Technologies from "./Components/technologies/Technologies";
import type { Itechnology } from "./types/technologyTypes";
import StackingList from "./Components/technologies/StackingList";
import { toast } from "react-hot-toast";
import Footer from "./Components/Footer";


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
    // check technology is added
    const ids = saved.map((item) => item.id)

    if(ids.includes(technology.id)){
      toast.error(`${technology.name} is already on your stack`)
      return
    }

    setSaved([...saved, technology])
      toast.success(`${technology.name} is added on your stack`)

  }
  // console.log(saved);


  const handleRemoveTechnology = (id: number) => {
    // console.log({id});
    // check the item is available
    const findTecnology = saved.find((item) => item.id === id )
    // if(!findTecnology) return toast.error('Technologies Not Found')
    const updatedList = saved.filter((item) => item.id != id )
    setSaved(updatedList)
    if(findTecnology) toast.success(`${findTecnology.name} remove from your stack`)
  }

  const handleClearAll = () => {
    if(!saved.length) return
    setSaved([])
    toast.success('Your stacking list is clear')
  }

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
                  technologiesPromise={technologiesPromise}
                  saved={saved}
                  ></Technologies>


            {/* stacking list */}
            <StackingList 
            technologies={saved} 
            handleClearAll={handleClearAll}
            handleRemoveTechnology={handleRemoveTechnology}
            ></StackingList>

            </Suspense>

            
          </div>

        </section>
      </main>

      <Footer></Footer>



    </>
  )
}

export default App
