import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";

const IsroArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const res = await fetch(
      "https://api.spaceflightnewsapi.net/v4/articles/?limit=2&search=isro"
    );
    const resJSON = await res.json();
    setArticles(resJSON.results);
  };

  return (
    <div>
      {Array.from(articles).map((article) => (
        <Card
          imgAlt="Latest ISRO News"
          imgSrc={article.image_url}
          className="rounded-xl mb-5"
        >
          <div className="flex flex-col gap-2 p-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href={article.url}>{article.title}</a>
            </h5>
            <p className="flex flex-col gap-3 font-normal text-gray-700 dark:text-gray-400">
              <p>{article.summary}</p>
              <h2>
                <span className="font-bold">Published At:</span>{" "}
                {article.published_at.split("T")[0]}
              </h2>
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default IsroArticles;
