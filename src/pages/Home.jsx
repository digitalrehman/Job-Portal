import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyLogo from "../components/CompanyLogo";
import JobListing from "../components/JobListing";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <JobListing />
    </>
  );
};

export default Home;
