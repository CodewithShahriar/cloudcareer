import React, { createContext, useContext } from "react";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { companiesData } from "./components/loader/getData";
import Footer from "./components/Footer";

export const JobCompanies = createContext([]);
// console.log(JobCompanies);
// export const CartJobCompanies = createContext([]);

const App = () => {
  const companyData = useLoaderData()
  // console.log(companyData);
  return (
    <div>
      <JobCompanies.Provider value={companyData}>
        {/* <CartJobCompanies.Provider> */}
          <Header />
          <Outlet />
          <Footer />
        {/* </CartJobCompanies.Provider> */}
      </JobCompanies.Provider>
    </div>
  );
};

export default App;
