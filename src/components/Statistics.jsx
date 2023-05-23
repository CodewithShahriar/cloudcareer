import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignmentData = useLoaderData()
    // console.log(assignmentData);
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
            width={500}
            height={400}
            data={assignmentData}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
                <CartesianGrid  strokeDasharray='3 3'/>
                <XAxis dataKey={name} />
                <YAxis  />
                <Tooltip />
                <Area type="monotone" dataKey='marks' stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Statistics;