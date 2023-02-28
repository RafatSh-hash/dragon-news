import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
  const CategoryNews = useLoaderData();

  return (
    <div>
      <h1>THis is category .Total {CategoryNews.length}</h1>

      {CategoryNews.map((news) => (
        <NewsSummaryCard news={news} key={news._id}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Category;
