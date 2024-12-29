import { createContext, useEffect, useState } from "react";
import { jobListings } from "../assets";

export let ContextProvider = createContext();

let ContextAPI = ({ children }) => {
  let [searchFilter, setSearchFilter] = useState({
    jobTitle: "",
    location: "",
  });
  let [isSearch, setIsSearch] = useState(false);  
  let [jobList, setJobList] = useState([]);
 async function fetchJobList() {
  setJobList(jobListings)
 }
 useEffect(() => {
  fetchJobList();
 }, []);
  return (
    <ContextProvider.Provider
      value={{ searchFilter, setSearchFilter, isSearch, setIsSearch, jobList, setJobList }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextAPI;
