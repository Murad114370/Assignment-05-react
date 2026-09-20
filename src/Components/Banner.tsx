import React from "react";
import Logo from "../assets/banner-stack.png";


// bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]


const Banner = () => {
  return (
    <div className="flex justify-between items-center  container mx-auto mt-5 ">
      <div >
        <h1 className="text-6xl font-bold pb-4">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
        </h1>
        <p className="text-[#475569]">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>

        <div className="flex gap-4 items-center pt-7">
            <button className="rounded-[8px] bg-linear-to-r from-[#F97316]  to-[#EC4899] px-3 py-2 text-white">Explore Technologies</button>
            <button className=" rounded-lg border border-gray-200 text-gray-700  px-9 py-2 ">Learn More</button>
        </div>
      </div>

      <div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Banner;
