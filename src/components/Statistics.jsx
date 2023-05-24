import React, { PureComponent } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LoadingSpinner from "./LoadingSpinner";

const Statistics = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  const assignmentData = useLoaderData();
  console.log(assignmentData);
  return (
    <>
      {/* header section */}
      <section className="bg-blue-50 relative drop-shadow-xl pb-32">
        <h1 className="text-4xl font-bold text-center">Statistics</h1>
        <img
          className="absolute w-72 bottom-0"
          src="https://i.postimg.cc/fyYqcPsw/vector.png"
          alt=""
        />
      </section>

      {/* Area chart for assignment */}
      <section className="my-container my-24 ">
        <h1 className="text-4xl drop-shadow-lg font-bold text-gray-900 p-5 rounded-lg border-2 text-center bg-gradient-to-r from-blue-500 to-purple-400 hover:from-purple-400 hover:to-blue-500 duration-700 mb-24">
          My Assignment Marks Are Showing On The Area Chart
        </h1>
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <ResponsiveContainer>
            <AreaChart
              data={assignmentData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="marks"
                stroke="#ba43de"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
};

export default Statistics;
