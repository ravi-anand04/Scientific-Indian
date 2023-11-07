import React, { useEffect, useState } from "react";
import { NASA_KEY } from "../constants";
import LatestLaunches from "../components/LatestLaunches";
import IsroArticles from "../components/IsroArticles";
import Featured from "../components/Featured";

const Hero = () => {
  //   useEffect(() => {
  //     fetchAPOD();
  //   }, []);

  //   const [apod, setApod] = useState({ explanation: "", url: "", date: "", title: "" });

  //   const fetchAPOD = async () => {
  //     const res = await fetch(
  //     //   `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
  //     );

  //     const resJSON = await res.json();
  //     const { explanation, hdurl: url, date, title } = resJSON;
  //     setApod({ explanation, url, date, title });
  //   };

  return (
    <div className="grid grid-cols-10 mt-5 sm:mx-[5%] lg:mx-[10%] max-sm:mx-1 font-georgia">
      <div
        // style={{ maxHeight: "60%" }}
        className="max-lg:order-2 max-md:col-span-10 max-lg:col-span-5 col-span-3 p-2 sidebar-left"
      >
        <IsroArticles />
      </div>
      <div
        // style={{ maxHeight: "60%" }}
        className="flex flex-col gap-3  max-lg:order-1 col-span-4 max-lg:col-span-10 p-2 highlight"
      >
        {/* <h1 className="font-bold  font-mono text-xl text-center">
          Featured Article
        </h1> */}
        <Featured />
      </div>
      <div
        // style={{ maxHeight: "60%" }}
        className="max-lg:order-3 max-sm:m-auto col-span-3 max-md:col-span-10 max-lg:col-span-5 p-2 sidebar-left"
      >
        <LatestLaunches />
      </div>
    </div>
  );
};

export default Hero;
