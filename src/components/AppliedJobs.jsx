import React, { useContext } from 'react';
import { JobCompanies } from '../App';
import SingleAppliedJob from './SingleAppliedJob/SingleAppliedJob';
import { getStoredData } from './Utils/FakeDb';

const AppliedJobs = () => {
    const companiesData = useContext(JobCompanies);
    const storedAppliedJobs = getStoredData()
    
    // console.log(companiesData);
    // console.log(appliedJobs);
    const appliedJobsKey = Object.keys(storedAppliedJobs).map(key => parseInt(key));
    // console.log(appliedJobsKey)
    const appliedJobs = companiesData.filter(element => appliedJobsKey.includes(element.id))
    // console.log(singleAppliedJob);
        
    ;
    return (
        <div>
            {/* header section */}
      <section className="bg-blue-50 drop-shadow-xl pt-24 pb-32">
        <h1 className="text-4xl font-bold text-center">Applied Jobs</h1>
      </section>
      <div className='my-container grid gap-8'>
      {
        appliedJobs.map(singleAppliedJob => <SingleAppliedJob 
            key={singleAppliedJob.id}
            singleAppliedJob={singleAppliedJob}
             />)
      }
      </div>
        </div>
    );
};

export default AppliedJobs;