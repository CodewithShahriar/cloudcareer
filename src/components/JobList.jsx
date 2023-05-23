import React from 'react';

const JobList = ({job}) => {
    console.log(job);
    return (
        <div className='bg-purple-50 mt-7 p-9'>
            
            <div className='bg-purple-100 w-16 h-16 flex justify-center items-center rounded-lg'>
                <img className='text-purple-700' src={job.icon} alt="" />
            </div>
            <div className='mt-7'>
                <h3 className='text-xl font-semibold'>{job.jobCategory}</h3>
                <p className='mt-2 text-gray-500'>{job.availableJobs} Jobs Available</p>
            </div>

            
        </div>
    );
};

export default JobList;