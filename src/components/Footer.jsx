import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black pt-20 mt-32">
      <div className="my-container flex gap-16 text-white ">
        <div className="grid gap-5 w-4/12">
          <h2 className="text-4xl font-bold">CloudX</h2>
          <p className="text-base text-gray-400">
            Our platform offers personalized job recommendations based on your
            skills and preferences to help you find the perfect career path.
          </p>
          <div className="flex gap-4">
            {/* <FontAwesomeIcon icon={faFacebookF} /> */}
            <Link to="https://facebook.com/apurbahasanj/">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/d0Yz1tks/facebook.png"
                  alt="fb"
                />
              </div>
            </Link>
            <Link to="https://www.instagram.com/apurbahasanj/">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/t4PKpVgv/twitter.png"
                  alt="twitter"
                />
              </div>
            </Link>
            <Link to="https://twitter.com/ApurbaHasanJ">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/rF7BB9qt/instagram.png"
                  alt="insta"
                />
              </div>
            </Link>
          </div>
        </div>
        {/* Company and product */}
        <div className="flex gap-28 w-4/12">
          <div className="grid gap-3">
            <h2 className="text-xl font-semibold">Company</h2>
            <div className="grid gap-3 text-base text-gray-400">
              <p>About Us</p>
              <p>Work</p>
              <p>Latest News</p>
              <p>Career</p>
            </div>
          </div>
          <div className="grid gap-3">
            <h2 className="text-xl font-semibold">Product</h2>
            <div className="grid gap-3 text-base text-gray-400">
              <p>Prototype</p>
              <p>Plans & Pricing</p>
              <p>Customers</p>
              <p>Integrations</p>
            </div>
          </div>
        </div>
        {/* Support and contact */}
        <div className="flex gap-20 w-4/12">
          <div className="grid gap-3 ">
            <h2 className="text-xl font-semibold">Support</h2>
            <div className="grid gap-3 text-base  text-gray-400">
              <p>Help Desk</p>
              <p>Sales</p>
              <p>Become a Partner</p>
              <p>Developers</p>
            </div>
          </div>
          <div className="grid gap-0 relative w-2/6">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="grid gap-3 text-base absolute top-12 text-gray-400">
              <p>524 Broadway, NYC</p>
              <p>+1777-978-5570</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-9  text-gray-50"/>
      <p className="my-container text-base  text-gray-400">@2023 CloudX. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
