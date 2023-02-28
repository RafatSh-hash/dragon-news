import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaBookmark, FaEye, FaShare, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const {
    details,
    image_url,
    category_id,

    title,
  } = news;
  return (
    <div>
      <h1>this is news. {news.title}</h1>
      <div className=" mt-5">
        <div className="w-11/12 mx-auto mb-10 rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={image_url}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="text-2xl mb-2">{title}</div>
            <span className="text-gray-700 text-base">{details}</span>
          </div>
        </div>
        <div className="w-auto mx-auto">
          <Link to={`/category/${category_id}`}>
            <button className="bg-blue-500 rounded-md px-3 py-2 text-white ">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
