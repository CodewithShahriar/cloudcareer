import React from "react";
import "./CompanyData.css";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const CompanyData = ({ data, singleCompanyData }) => {
  
  // console.log(singleCompanyData);
  const {
    id,
    image,
    name,
    jobCategories,
    jobTitle,
    officeAddress,
    salary,
    contactNumber,
    educationalRequirements,
    experiences,
  } = data;
  return (
    <div className="border-solid border border-gray-300 p-9 rounded-lg shadow-xl drop-shadow-lg">
      <div className="h-12 w-48 ">
        <img className="" src={image} alt="ICompanyImg" />
      </div>
      <h2 className="text-2xl font-bold mt-7">{jobTitle}</h2>
      <p className="mt-2 text-lg font-semibold text-gray-500">{name}</p>
      <div className="color-gradient flex gap-4 mt-4">
        {jobCategories.map((category) => (
          <p className="border p-2 px-4 rounded-md font-bold text-base border-indigo-500/75 hover:border-rose-500/75">
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
      <Link to={`/jobDetails/${id}`}>
      <button className="btn mt-5">View Details</button>
      </Link>
    </div>
  );
};

export default CompanyData;
