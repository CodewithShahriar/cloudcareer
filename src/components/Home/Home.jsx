import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import JobList from '../JobList';

const Home = () => {

    const [jobList, setJobList] = useState([])
    useEffect(()=>{
        fetch('joblist.json')
        .then(res => res.json())
        .then(data => setJobList(data))
    },[])

    return (
        <div className='my-container'>
            {/* Job Category List */}
            <section className='mx-auto'>
            <h1 className='text-5xl text-center  font-bold mt-28'>
                Job Category List
            </h1>
            <p className='text-gray-500 text-center mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
                {
                    jobList.map(job => <JobList 
                        key={job.id}
                        job={job}
                    />)
                }
                </div>
            </section>
        </div>
    );
};

export default Home;