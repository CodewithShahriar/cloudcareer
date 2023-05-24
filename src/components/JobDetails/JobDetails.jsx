import React, { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import { JobCompanies } from "../../App";
import "./JobDetails.css";
import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../Utils/FakeDb";
import { toast } from "react-toastify";
import { JobCompanies } from "../../App";

const JobDetails = () => {
  const companiesData = useContext(JobCompanies);
  // console.log(companiesData);
  const data = useParams();
  console.log(data.Id);
  const singleCompanyData = companiesData.find(
    (company) => company.id === parseInt(data.Id)
  );

  console.log(singleCompanyData);
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
  } = singleCompanyData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* header section */}
      <section className="bg-blue-50 relative drop-shadow-xl pb-32">
        <h1 className="text-4xl font-bold text-center">Job details</h1>
        <img
          className="absolute w-72 bottom-0"
          src="https://i.postimg.cc/fyYqcPsw/vector.png"
          alt=""
        />
      </section>

      {/* Body Section */}
      <section className="my-container mt-28">
        <div className="h-auto">
          <h2 className="font-bold text-5xl text-gradient-job pb-6">{name}</h2>
        </div>
        <div className=" lg:flex grid justify-center items-center pt-7 gap-6 ">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold">
              Job Description: <br />
              <span className="text-gray-700 text-base font-normal">
                {jobDescription}
              </span>
            </h3>
            <h3 className="text-lg font-semibold">
              Job Responsibility: <br />
              <span className="text-gray-700 text-base font-normal">
                {jobResponsibility}
              </span>
            </h3>
            <h3 className="text-lg font-semibold">
              Educational Requirements: <br />
              <span className="text-gray-700 text-base font-normal">
                {educationalRequirements}
              </span>
            </h3>
            <h3 className="text-lg font-semibold">
              Experiences: <br />
              <span className="text-gray-700 text-base font-normal">
                {experiences}
              </span>
            </h3>
          </div>

          {/* Job details */}
          <div className="lg:w-3/6">
            <div className="bg-purple-200 drop-shadow-xl  rounded-lg p-7">
              <div className="border-b border-gray-500 pb-6">
                <h1 className="text-xl font-bold ">Job Details</h1>
              </div>
              <div className=" mt-5">
                <p className="text-lg flex gap-2 items-start">
                  <span className=" flex gap-2 items-center whitespace-nowrap">
                    <CurrencyDollarIcon className="w-5 h-5 text-gray-500" />
                    <span className="font-semibold">Salary : </span>
                  </span>
                  <span className="text-gray-700">{salary} (Per Month)</span>
                </p>
                <p className="text-lg mt-3 flex gap-2 items-start">
                  <span className=" flex gap-2 items-center whitespace-nowrap">
                    <BriefcaseIcon className="w-5 h-5 text-gray-500" />
                    <span className="font-semibold">Job Title : </span>
                  </span>
                  <span className="text-gray-700">{jobTitle}</span>
                </p>
              </div>
              <div className="mt-8">
                <div className="border-b border-gray-500 pb-6">
                  <h1 className="text-xl font-bold ">Contact Information</h1>
                </div>
                <div className=" mt-5">
                  <p className="text-lg mt-3 flex gap-2 items-center">
                    <PhoneIcon className="w-5 h-5 text-gray-500" />
                    <span>
                      <span className="font-semibold">Phone : </span>
                      <span className="text-gray-700">{contactNumber}</span>
                    </span>
                  </p>
                  <p className="text-lg mt-3 flex gap-2 items-center">
                    <EnvelopeIcon className="w-5 h-5 text-gray-500" />
                    <span>
                      <span className="font-semibold">Email : </span>
                      <span className="text-gray-700">{officeEmail}</span>
                    </span>
                  </p>
                  <p className="text-lg mt-3 flex gap-2 items-start">
                    <span className="flex gap-2 items-center whitespace-nowrap">
                      <MapPinIcon className="w-5 h-5 text-gray-500" />
                      <span className="font-semibold">Address :</span>
                    </span>

                    <span className="text-gray-700">{officeAddress}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* button with onClick handler and alert */}
            <button
              onClick={() => {
                const added = addToDb(id);
                if (added) {
                  toast("Job applied successfully! 👌");
                } else {
                  toast("You have already applied for this job.");
                }
              }}
              className="btn w-full flex items-center justify-center mt-6"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
