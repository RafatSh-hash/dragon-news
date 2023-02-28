import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const Allnews = useLoaderData();
  return (
    <div>
      {Allnews.map((news) => (
        <NewsSummaryCard news={news} key={news._id}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Home;
