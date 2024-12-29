import React, { useContext, useRef }  from "react";
import { images } from "../assets/index";
import { MapPin, Search } from "lucide-react";
import { ContextProvider } from "../context/ContextProvider";

const Hero = () => {
  let { setSearchFilter, setIsSearch, searchFilter } = useContext(ContextProvider);
  let searchTitle = useRef(null);
  let searchLocation = useRef(null);
  let handleSearch = (e) => {
    e.preventDefault();
    setSearchFilter({
      jobTitle: searchTitle.current.value,
      location: searchLocation.current.value,
    });
    setIsSearch(true);
  };
  return (
    <div className="flex md:justify-around justify-center items-center w-full md:h-[90vh] h-screen md:flex-row flex-col-reverse     ">
      <div className="xl:w-[40%] md:w-1/2 w-full px-5 mt-10 md:mx-0 mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Find a job that aligns with your interests and skills
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          Apply to jobs with ease and get the best opportunities for your career
        </p>
        <form onSubmit={handleSearch} className="flex items-center w-[90%] md:w-full  mt-6 border bg-white rounded-md p-2 gap-2">
          <div className="flex items-center border-r ">
            <Search className="text-blue-600" size={20} />
            <input
              type="text"
              placeholder="Job Title"
              className="w-1/2 p-2 outline-none"
              ref={searchTitle}
            />
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-blue-600" />
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 outline-none"
              ref={searchLocation}
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Search
          </button>
        </form>
        <p className="text-gray-500 mt-4">
          <span className="font-bold">Note:</span> You can search for jobs by
          job title, location, or both.
        </p>
      </div>
      <img src={images.background} alt="background" className="w-1/3 " />
    </div>
  );
};

export default Hero;
