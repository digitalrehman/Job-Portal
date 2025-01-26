import { createContext, useEffect, useState } from "react";
import { jobListings } from "../assets";

export let ContextProvider = createContext();

let ContextAPI = ({ children }) => {
  let [searchFilter, setSearchFilter] = useState({
    jobTitle: "",
    location: "",
  });
  let [isLoading, setIsLoading] = useState(false);
  let [isSearch, setIsSearch] = useState(false);  
  let [jobList, setJobList] = useState([]);
  useEffect(() => {
   fetchJobList();
  }, []);
 async function fetchJobList() {
  setIsLoading(true);
  setJobList(jobListings)
  setIsLoading(false);
 }
  return (
    <ContextProvider.Provider
      value={{ searchFilter, setSearchFilter, isSearch, setIsSearch, jobList, setJobList, isLoading }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextAPI;
