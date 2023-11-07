import React from "react";
import Button from "./Button";
import { Card } from "flowbite-react";

const LaunchCard = ({
  name,
  provider,
  vehicle,
  pad,
  mission_description,
  launch_description,
  date_str,
  quicktext,
}) => {
  const { name: center, statename, country } = pad.location;

  return (
    // <div className="flex flex-col flex-wrap gap-3 items-center p-4 border-solid border-4 border-teal-600 bg-teal-100 rounded-xl">
    //   <h1 className="font-bold text-xl">{name}</h1>
    //   <h3 className="text-xl">{provider.name}</h3>
    //   <h3>{vehicle.name}</h3>
    //   <h2 className="font-bold">{date_str}</h2>
    //   <Button label="Read more..." color="bg-blue-500" visible={true} fontSize="md" px={4} py={2} textColor="white"/>
    // </div>
    <Card className="max-w-sm p-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{name}</p>
      </h5>
      <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">
        <p>{date_str}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>{launch_description}</p>
      </p>
      <Button
        visible={true}
        label="Read more..."
        color="bg-blue-600"
        textColor={"white"}
        py={2}
      />
    </Card>
  );
};

export default LaunchCard;
