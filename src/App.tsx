import { Suspense } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Technologies from "./Components/technologies/Technologies";
import type { Itechnology } from "./types/technology";


const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}



function App() {
  const technologiesPromise = technologiesFetch();

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>

      </Suspense>

    </>
  )
}

export default App
