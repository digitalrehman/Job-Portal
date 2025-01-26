import React from "react";
import Hero from "../components/Hero";
import CompanyLogo from "../components/CompanyLogo";
import JobListing from "../components/JobListing";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
     
      <Hero />
      <JobListing />
      <CompanyLogo />
      <Footer />
    </>
  );
};

export default Home;
