import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Statistics from "./components/Statistics";
import Blogs from "./components/Blogs";
import AppliedJobs from "./components/AppliedJobs";
import Home from "./components/Home/Home";
import { companiesData } from "./components/loader/getData";
import JobDetails from "./components/JobDetails/JobDetails";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: companiesData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/jobDetails/:Id`,
        element: <JobDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("statistics.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Router />
    </RouterProvider>
  </React.StrictMode>
);
