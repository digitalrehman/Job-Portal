import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../context/ContextProvider";
import { ChevronLeft, ChevronRight, ChevronUp, Loader2, X } from "lucide-react";
import { jobCategories, jobListings, jobLocations } from "../assets";
import JobCard from "./JobCard";

const JobListing = () => {
  let { searchFilter, setSearchFilter, isSearch, jobList, isLoading } =
    useContext(ContextProvider);
  let [showFilter, setShowFilter] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [selectedCategory, setSelectedCategory] = useState([]);
  let [selectedLocation, setSelectedLocation] = useState([]);
  let [filteredJobList, setFilteredJobList] = useState(jobList);
  function handleCategoryChange(category) {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  }
  function handleLocationChange(location) {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    );
  }
  useEffect(() => {
    let matchesCategory = (job) =>
      selectedCategory.length === 0 || selectedCategory.includes(job.category);
    let matchesLocation = (job) =>
      selectedLocation.length === 0 || selectedLocation.includes(job.location);
    let matchesSearchTitle = (job) =>
      searchFilter.jobTitle === "" ||
      (job.title &&
        job.title.replace(/\s+/g, "")
          .toLowerCase()
          .trim()
          .includes(searchFilter.jobTitle.toLowerCase().trim()));

    let matchesSearchLocation = (job) =>
      searchFilter.location === "" ||
      job.location.toLowerCase().trim().includes(searchFilter.location.toLowerCase().trim());

    let filtered = jobList
      .reverse()
      .filter(
        (job) =>
          matchesCategory(job) &&
          matchesLocation(job) &&
          matchesSearchTitle(job) &&
          matchesSearchLocation(job)
      );
    setFilteredJobList(filtered);
    setCurrentPage(1);
  }, [selectedCategory, selectedLocation, searchFilter, jobList]);
  
  return (
    <div className="container mx-auto flex flex-col lg:flex-row xl:px-14 px-10 ">
      <div className="w-full lg:w-1/4 p-5 border">
        {isSearch &&
          (searchFilter.jobTitle !== "" || searchFilter.location !== "") && (
            <>
              <h1 className="text-lg font-bold mb-2">Current Search</h1>
              <div className="flex items-center gap-2">
                {searchFilter.jobTitle && (
                  <div className="flex items-center gap-2 bg-green-200 p-2 rounded-md">
                    <p className="text-sm font-medium">
                      {searchFilter.jobTitle}
                    </p>
                    <X
                      className="w-4 h-4 cursor-pointer"
                      onClick={() =>
                        setSearchFilter({ ...searchFilter, jobTitle: "" })
                      }
                    />
                  </div>
                )}
                {searchFilter.location && (
                  <div className="flex items-center gap-2 bg-red-200 p-2 rounded-md">
                    <p className="text-sm font-medium">
                      {searchFilter.location}
                    </p>
                    <X
                      className="w-4 h-4 cursor-pointer"
                      onClick={() =>
                        setSearchFilter({ ...searchFilter, location: "" })
                      }
                    />
                  </div>
                )}
              </div>
            </>
          )}

        <button
          className="lg:hidden mb-4 bg-blue-500 mt-4 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
          onClick={() => setShowFilter(!showFilter)}
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Search by Category */}
        <div
          className={`flex flex-col gap-2 mt-6 mb-8 ${
            showFilter ? "" : "max-lg:hidden"
          }`}
        >
          <h1 className="text-lg font-bold mb-2">Search by Category</h1>
          <ul className="flex flex-col gap-2">
            {jobCategories.map((category, index) => (
              <li key={index} className="text-md font-normal cursor-pointer">
                <input
                  type="checkbox"
                  id={category}
                  className="mr-2 scale-110"
                  onChange={() => handleCategoryChange(category)}
                />
                <label htmlFor={category} className="cursor-pointer">
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Search by Location */}
        <div
          className={`flex flex-col gap-2 ${showFilter ? "" : "max-lg:hidden"}`}
        >
          <h1 className="text-lg font-bold mb-2">Search by Location</h1>
          <ul className="flex flex-col gap-2">
            {jobLocations.map((location, index) => (
              <li key={index} className="text-md font-normal cursor-pointer">
                <input
                  type="checkbox"
                  id={location}
                  className="mr-2 scale-110"
                  onChange={() => handleLocationChange(location)}
                />
                <label htmlFor={location} className="cursor-pointer">
                  {location}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listings */}
      {
        isLoading ? <div className="flex justify-center items-center h-screen"><Loader2 className="size-6 animate-spin text-blue-500" /></div> : (
        <div className="w-full lg:w-3/4 px-4 mt-10 lg:mt-0">
        <h1 className="text-3xl py-2 font-bold" id="latest-jobs">
          Latest Jobs
        </h1>
        <p className="text-md mb-8 text-gray-500">
          Choose jobs from the top employers and apply for the same.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobList
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
        </div>
        {filteredJobList.length > 6 && (
          <div className="flex justify-center gap-2 items-center my-10">
            <a
              href="#latest-jobs"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            >
              <ChevronLeft className="size-6 cursor-pointer text-blue-500 hover:text-blue-700" />
            </a>
            {Array.from(
              { length: Math.ceil(filteredJobList.length / 6) },
              (_, index) => (
                <a
                  key={index}
                  href="#latest-jobs"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  <button
                    className={`${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    } px-3 p-1 rounded font-semibold hover:bg-blue-700 transition-all duration-300`}
                  >
                    {index + 1}
                  </button>
                </a>
              )
            )}
            <a
              href="#latest-jobs"
              onClick={() =>
                setCurrentPage(
                  Math.min(
                    Math.ceil(filteredJobList.length / 6),
                    currentPage + 1
                  )
                )
              }
            >
              <ChevronRight className="size-6 cursor-pointer text-blue-500 hover:text-blue-700" />
            </a>
          </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
