import { data } from "autoprefixer";
import './Home.css'
import React, { useContext, useEffect, useState } from "react";
import JobList from "../JobList";
import { JobCompanies } from "../../App";
import { useLoaderData } from "react-router-dom";
import CompanyData from "../Companydata/CompanyData";

const Home = () => {
  const companyData = useLoaderData();
  // console.log(companyData);
  
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetch("joblist.json")
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);

  // const company = useContext(JobCompanies);
  // console.log(company);
  

  return (
    <div className="">

      {/* header Section */}
      <section className="bg-blue-50 drop-shadow-xl">
        <div className="my-container flex flex-col md:flex-row   justify-center items-center gap-16">
        <div>
            <h1 className="header-title text-5xl md:text-6xl lg:text-7xl font-bold  ">
                One Step Closer To Your 
                <br />
                <span className="text-gradient">Dream Job</span>
            </h1>
            <p className="text-gray-500 mt-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="mt-7 btn font-extrabold text-lg">Get Started</button>
        </div>
        <div>
        <img className="header-img ml-auto" src="https://www.pngmart.com/files/15/Smiling-Business-Man-Standing-PNG-Image.png" alt="img" />
        </div>
        </div>
      </section>

      {/* Job Category List */}
      <section className="my-container mx-auto ">
        <h1 className="text-5xl text-center  font-bold mt-28">
          Job Category List
        </h1>
        <p className="text-gray-500 text-center mt-4">
        Take control of your career path and discover your potential with our comprehensive job search tools and resources.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {jobList.map((job) => (
            <JobList key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="my-container">
        <h1 className="text-5xl text-center font-bold mt-28">Featured Jobs</h1>
        <p className="text-gray-500 text-center mt-4">
        With our user-friendly platform, you can easily track your job search progress and stay organized throughout the application process.
        </p>
        <div className="grid lg:grid-cols-2 mt-8 gap-8">
          {
            companyData.map(data => <CompanyData
            key={data.id}
            data={data}
               />)
          }
        </div>
          <div className="flex ">
          <button className="btn mt-9 mx-auto">See All Jobs</button>
          </div>
      </section>
    </div>
  );
};

export default Home;
