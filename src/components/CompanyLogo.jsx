import React from "react";
import { companyLogos } from "../assets/index";

const CompanyLogo = () => {
  return (
    <div className="flex w-full gap-3 p-5 flex-wrap md:w-[80%] mx-auto justify-around items-center my-10 shadow-lg rounded-lg">
      {companyLogos.map((company) => (
        <img
          src={company.logo}
          alt={company.name}
          key={company.id}
          className="h-12 md:h-auto"
        />
      ))}
    </div>
  );
};

export default CompanyLogo;
