import React from "react";
import { FaBookmark, FaEye, FaShare, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { _id, author, details, image_url, total_view, rating, title } = news;

  return (
    <div className=" mt-5">
      <div className="w-11/12 mx-auto mb-10 rounded overflow-hidden shadow-lg">
        <div className="flex justify-between h-auto items-center px-3 py-2">
          <div className="flex h-auto items-center">
            <img className="w-14 h-14 rounded-full" src={author.img} alt="" />
            <div>
              <p className="px-5">{author.name}</p>
              <p className="px-5">
                <small>{author.published_date}</small>
              </p>
            </div>
          </div>
          <div className="flex">
            <span className="px-3">
              <FaShare></FaShare>
            </span>
            <FaBookmark></FaBookmark>
          </div>
        </div>
        <img className="w-full" src={image_url} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="text-2xl mb-2">{title}</div>
          <span className="text-gray-700 text-base">
            {details.length > 200 ? (
              <p>
                {details.slice(0, 250) + "..."}
                <Link className="text-blue-500" to={`/news/${_id}`}>
                  Read More
                </Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </span>
        </div>
        <div className="px-6 flex justify-between pt-4 pb-2">
          <div className="">
            <p className="flex h-auto items-center">
              <span className="px-3">
                <FaStar></FaStar>{" "}
              </span>
              {rating.number}
            </p>
          </div>
          <div>
            <p className="flex h-auto items-center">
              <span className="px-3">
                <FaEye></FaEye>
              </span>
              {total_view}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSummaryCard;
