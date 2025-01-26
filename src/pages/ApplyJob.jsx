import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../context/ContextProvider";
import Loader from "../components/Loader";
import { Briefcase, HandCoins, MapPin, User } from "lucide-react";
import kConvert from "k-convert";
import moment from "moment";
import JobCard from "../components/JobCard";
const ApplyJob = () => {
  let { id } = useParams();
  let { jobList } = useContext(ContextProvider);
  let [jobData, setJobData] = useState([]);
  let fetchJobData = async () => {
    let data = jobList.filter((job) => job._id === id);
    if (jobList.length !== 0) {
      setJobData(data[0]);
    }
  };
  useEffect(() => {
    if (jobList.length > 0) {
      fetchJobData();
    }
  }, [id, jobList]);

  return jobData ? (
    <div className="flex flex-col min-h-screen container py-10 px-4 2xl:px-20 mx-auto">
      <div className="jobApplayCard w-full flex flex-col md:flex-row items-center shadow-md justify-center  md:justify-between p-10">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-start ">
          <img
            src={jobData.companyId?.logo}
            alt={jobData.companyId?.name}
            className="md:w-24 w-20"
          />
          <div className="flex flex-col justify-center md:items-start items-center gap-3 ">
            <h1 className="md:text-3xl text-xl font-semibold text-gray-800">
              {jobData.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 flex-wrap justify-center">
              <div className="flex items-center gap-1">
                <Briefcase />
                <p>{jobData.companyId?.name}</p>
              </div>
              <div className="flex items-center gap-1">
                <MapPin />
                <p>{jobData.location}</p>
              </div>
              <div className="flex items-center gap-1">
                <User />
                <p>{jobData.level} employees</p>
              </div>
              <div className="flex items-center gap-1">
                <HandCoins />
                <p>CTC: {kConvert.convertTo(jobData.salary)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex flex-col md:items-end justify-center gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white font-medium text-xl rounded-md">
            Apply Now
          </button>
          <p className="text-gray-500 text-base">
            Posted {moment(jobData.date).fromNow()}
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row justify-between items-start flex-col gap-10">
        <div className="lg:w-2/3 w-full ">
          <h1 className="md:text-3xl text-2xl font-bold my-7 text-gray-800">
            Job Description
          </h1>
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: jobData.description }}
          ></div>
          <button className="px-4 py-2 mt-5 bg-blue-600 text-white font-medium text-xl rounded-md">
            Apply Now
          </button>
        </div>
        <div className="lg:w-1/3 mt-7 w-full">
          <h1 className="text-2xl font-semibold text-gray-800">
            More job from {jobData.companyId?.name}
          </h1>
          <div className="grid lg:grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {jobList.filter((job) => job._id !== jobData._id ).filter((job) => job.companyId?.name === jobData.companyId?.name).slice(0, 3).map((job) => (
              <JobCard job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen w-full">
      <Loader />
    </div>
  );
};

export default ApplyJob;
