import React from "react";
import "./SingleAppliedJob.css";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const SingleAppliedJob = ({ singleAppliedJob }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  const {
    id,
    image,
    name,
    jobCategories,
    jobTitle,
    officeAddress,
    jobDescription,
    jobResponsibility,
    salary,
    contactNumber,
    officeEmail,
    educationalRequirements,
    experiences,
  } = singleAppliedJob;

  return (
    <div>
      <div className="border-solid border lg:flex items-center gap-7 border-gray-300 p-9 rounded-lg shadow-xl drop-shadow-lg">
        <div className="w-56 h-56 bg-purple-50 flex justify-center items-center">
          <img
            className=" w-40 drop-shadow-lg"
            src={image}
            alt="CompanyImg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-7 lg:mt-0">{jobTitle}</h2>
          <p className="mt-2 text-lg font-semibold text-gray-500">{name}</p>
          <div className="color-gradient flex gap-4 mt-4">
            {jobCategories.map((category, index) => (
              <p
                key={index}
                className="border p-2 px-4 rounded-md font-bold text-base border-indigo-500/75 hover:border-rose-500/75"
              >
                {category}
              </p>
            ))}
          </div>
          <div className="mt-3">
            <div className="flex gap-2  items-center">
              <MapPinIcon className="w-5 h-5 text-gray-500" />
              <p className=" text-lg font-semibold text-gray-500">
                {officeAddress}
              </p>
            </div>
            <div className="flex mt-1 gap-2 justify-items-center items-center">
              <CurrencyDollarIcon className="w-5 h-5 text-gray-500" />
              <p className=" text-lg font-semibold text-gray-500">
                Salary: {salary}
              </p>
            </div>
          </div>
        </div>
        <Link className="ml-auto" to={`/jobDetails/${id}`}>
          <button className="btn mt-5">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleAppliedJob;
