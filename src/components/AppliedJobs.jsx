import React, { useContext, useState } from "react";
import { JobCompanies } from "../App";
import SingleAppliedJob from "./SingleAppliedJob/SingleAppliedJob";
import { getStoredData } from "./Utils/FakeDb";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AppliedJobs = () => {
  const companiesData = useContext(JobCompanies);
  const storedAppliedJobs = getStoredData();

  const appliedJobsKey = Object.keys(storedAppliedJobs).map((key) =>
    parseInt(key)
  );
  const appliedJobs = companiesData.filter((element) =>
    appliedJobsKey.includes(element.id)
  );
  console.log(appliedJobs);

  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState(appliedJobs);

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    setFilteredJobs(
      option === "All"
        ? appliedJobs
        : appliedJobs.filter((job) => job.jobCategories.includes(option))
    );
  };

  // Filter applied jobs based on the selected option
  const filteredJobsToShow =
    selectedOption === "All"
      ? appliedJobs
      : appliedJobs.filter((job) => job.jobCategories.includes(selectedOption));

  return (
    <>
      {/* header section */}
      <section className="bg-blue-50 relative drop-shadow-xl pb-32">
        <h1 className="text-4xl font-bold text-center">Applied Jobs</h1>
        <img
          className="absolute w-72 bottom-0"
          src="https://i.postimg.cc/fyYqcPsw/vector.png"
          alt=""
        />
      </section>

      {/* Body Section */}
      <section className="my-container mt-24">
        {/* Filter by job type */}
        <div className="grid justify-end mb-6">
          <label className="block text-xl font-bold mb-2" htmlFor="type">
            Filter By
          </label>
          <select
            className="appearance-none text-lg drop-shadow-lg font-semibold border border-gray-300 rounded py-4 px-6 leading-tight focus:outline-none focus:shadow-outline"
            id="type"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="All">All</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        {/* Render filtered jobs */}
        <div className="grid gap-8 mt-9">
          {filteredJobsToShow.map((singleAppliedJob) => (
            <SingleAppliedJob
              key={singleAppliedJob.id}
              singleAppliedJob={singleAppliedJob}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AppliedJobs;
