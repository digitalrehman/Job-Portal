import { createContext, useState } from "react";

export let ContextProvider = createContext();

let ContextAPI = ({ children }) => {
  let [searchFilter, setSearchFilter] = useState({
    jobTitle: "",
    location: "",
  });
  let [isSearch, setIsSearch] = useState(false);
  return (
    <ContextProvider.Provider
      value={{ searchFilter, setSearchFilter, isSearch, setIsSearch }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextAPI;
