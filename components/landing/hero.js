import React from "react";
import "@fontsource/montserrat";
import "@fontsource/poppins/700.css";

export default function hero() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2
              style={{ fontFamily: "Poppins" }}
              className="sm:max-w-3xl mb-6 text-3xl  text-secondary md:text-5xl md:w-4xl"
            >
              Decentralized & contactless hotels
            </h2>
            <p
              style={{ fontFamily: "Montserrat" }}
              className="text-base text-secondary md:text-md"
            >
              Reimagine the hospitality experience by contactless and
              decentralized hotel checkin. Live and dine on the pulse of life.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-gradient-to-r from-rose-700 to-pink-600"
            >
              <span style={{ fontFamily: "Poppins" }} className="">
                Login
              </span>
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-secondary transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Don't have an account? Register now.
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h- sm:h-96"
            src="assets/heroimage.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
