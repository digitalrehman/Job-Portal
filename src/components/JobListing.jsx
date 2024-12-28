import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import { X } from "lucide-react";

const JobListing = () => {
  let { searchFilter, setSearchFilter, isSearch, setIsSearch } =
    useContext(ContextProvider);
  return (
    <div className="w-full flex flex-col md:flex-row 2xl:px-20 md:px-14 px-10 items-center">
      <div className="w-full md:w-1/4 flex flex-col gap-2 border p-5">
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
      </div>
    </div>
  );
};

export default JobListing;
