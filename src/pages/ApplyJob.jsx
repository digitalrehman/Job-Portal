import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../context/ContextProvider";

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
  }, [id]);
  console.log(jobData);

  return <div>ApplayJob</div>;
};

export default ApplyJob;
