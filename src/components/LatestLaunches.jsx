import React, { useEffect, useState } from "react";
import LaunchCard from "./LaunchCard";

const LatestLaunches = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = async () => {
    const res = await fetch(
      "https://fdo.rocketlaunch.live/json/launches/next/5"
    );
    const resJson = await res.json();
    console.log(resJson);
    setLaunches(resJson.result);
  };

  return (
    <div >
      <ul className="flex flex-col gap-3">
        {launches.map((launch) => (
          <li key={launch.id}>
            <div>
              <LaunchCard {...launch} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestLaunches;
