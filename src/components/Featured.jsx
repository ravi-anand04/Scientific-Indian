import React, { useEffect, useState } from "react";

const Featured = () => {
  const [event, setEvent] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [secondaryCreator, setSecondaryCreator] = useState("");
  const [photographer, setPhotographer] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const res = await fetch(
      "https://images-api.nasa.gov/search?title=isro&page_size=1"
    );
    const resJSON = await res.json();
    fetchImage(resJSON.collection.items[0].href);

    // console.log("EVENT: ", resJSON.collection.items[0].data[0].title);

    setTitle(resJSON.collection.items[0].data[0].title);
    setDescription(resJSON.collection.items[0].data[0].description_508);
    setLongDesc(resJSON.collection.items[0].data[0].description);
    setSecondaryCreator(resJSON.collection.items[0].data[0].secondary_creator);
    setPhotographer(resJSON.collection.items[0].data[0].photographer);
  };

  const fetchImage = async (href) => {
    const res = await fetch(href);
    const resJSON = await res.json();

    setImageUrl(resJSON[2]);
  };

  return (
    <div className="flex flex-col flex-wrap gap-5">
      <div className="img-container relative">
        <img src={imageUrl} loading="lazy" />
        <span className="absolute bottom-0 bg-white left-[30%] px-5 max-lg:hidden">
          {secondaryCreator}
        </span>
      </div>
      <h2 className="text-center text-3xl font-bold font-georgia">{title}</h2>
      <h2 className="text-md opacity-60 font-georgia">{description}</h2>
      <p
        className="text-md opacity-60 font-georgia"
        style={{ height: "600px", overflow: "hidden" }}
      >
        {longDesc}
      </p>
      <span className="text-center text-sm font-georgia ">
        <span className="font-bold font-montserrat">Credits:</span>{" "}
        {secondaryCreator ? secondaryCreator : photographer}
      </span>
    </div>
  );
};

export default Featured;
