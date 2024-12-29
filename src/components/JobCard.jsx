import React from "react";
import { images } from "../assets";

const JobCard = ({ job }) => {
  return (
    <div className="border p-6 shadow rounded hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className="flex justify-between items-center">
        <img src={images.job1} alt="job" className="h-8" />
      </div>
      <h1 className="text-xl mt-2 font-medium">{job.title}</h1>
      <div className="flex gap-3 items-center text-sm mt-2">
        <span className="border-blue-200 border px-2 py-1.5 rounded bg-blue-50 ">
          {job.location}
        </span>
        <span className="border-red-200 border px-2 py-1.5 rounded bg-red-50 ">
          {job.level}
        </span>
      </div>
      <p
        className="text-sm mt-2 text-gray-500"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>
      <div className="flex gap-3 items-center text-sm mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Apply
        </button>
        <button className=" text-gray-500 border border-gray-500 px-4 py-2 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
