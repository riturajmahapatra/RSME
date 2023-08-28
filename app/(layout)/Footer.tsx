/* eslint-disable @next/next/no-img-element */
import React from "react";
import '@/app/components/style.css'

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="  footer-img h-[60vh] text-white pt-8">
          <div className="container  mt-[170px] mx-auto flex flex-col md:flex-row justify-between">
            <div className="md:w-1/3">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p>Email: jansevaa31@gmail.com</p>
              <p>Phone: +91-9968966660</p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a className=" footer-underline" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className=" footer-underline" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className=" footer-underline" href="#">
                    Medical Aid
                  </a>
                </li>
                <li>
                  <a className=" footer-underline" href="#">
                    Student Education
                  </a>
                </li>
                <li>
                  <a className=" footer-underline" href="#">
                    Training Programs
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex  justify-start items-center  space-x-4">
                <a href="#">
                  <div className="">
                    <img
                      className="h-10 w-10 rounded-md hover:scale-110 transform transition-transform duration-700"
                      src="/images/socials/facebook.svg"
                      alt=""
                    />
                  </div>
                </a>
                <a href="#" className="">
                  <div className="">
                    <img
                      className="h-8 w-8  hover:scale-110 transform transition-transform duration-700"
                      src="/images/socials/linkedin.svg"
                      alt=""
                    />
                  </div>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <div className="">
                    <img
                      className="h-10 w-10 rounded-md hover:scale-110 transform transition-transform duration-700"
                      src="/images/socials/youtube.svg"
                      alt=""
                    />
                  </div>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <div className="">
                    <img
                      className="h-10 w-10 rounded-md hover:scale-110 transform transition-transform duration-700"
                      src="/images/socials/twitter.svg"
                      alt=""
                    />
                  </div>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <div className="">
                    <img
                      className="h-10 w-10 rounded-md hover:scale-110 transform transition-transform duration-700"
                      src="/images/socials/instagram.svg"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <p className="text-end mt-8 mr-2">
            &copy; {new Date().getFullYear()} Jansevaa Foundation. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
