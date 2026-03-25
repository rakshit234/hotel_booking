import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#F6F9FC] border-t border-gray-500/30">
      <div
        className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12
                      flex flex-col lg:flex-row gap-12 opacity-80"
      >
        {/* LEFT SECTION */}
        <div className="flex-1">
          <img className="invert w-36" src={assets.logo} alt="logo" />

          <p className="max-w-md mt-6 text-sm text-gray-700">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="text-white hover:text-gray-300">
              <img src={assets.instagramIcon} alt="instagram" className="w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img src={assets.facebookIcon} alt="facebook" className="w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img src={assets.twitterIcon} alt="twitter" className="w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <img src={assets.linkendinIcon} alt="linkedin" className="w-6" />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* COMPANY */}
          <div>
            <h2 className="font-playfair text-lg text-gray-900 mb-4">
              COMPANY
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h2 className="font-playfair text-lg text-gray-900 mb-4">
              SUPPORT
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety Information</a>
              </li>
              <li>
                <a href="#">Cancellation Options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>

          {/* STAY UPDATED */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-4">STAY UPDATED</h2>
            <p className="text-sm text-gray-700 mb-4">
              Subscribe to our newsletter for inspiration and special offers.
            </p>

            <div className="flex w-full max-w-sm">
              <input
                type="email"
                className="flex-1 bg-white rounded-l-md border border-gray-300 h-9 px-3 outline-none text-sm"
                placeholder="Your email"
              />
              <button className="bg-black h-9 w-9 flex items-center justify-center rounded-r-md shrink-0">
                <img
                  src={assets.arrowIcon}
                  alt="arrow"
                  className="w-3.5 invert"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-4 text-xs md:text-sm text-gray-500">
        <p className="text-center md:text-left">
          <span className="text-xl">©</span>{" "}
          <a href="/hotel_booking/" className="hover:underline">
            QuickStay
          </a>
          . All Rights Reserved.
        </p>

        <ul className="flex items-center gap-4 mt-3 md:mt-0">
          <li>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
