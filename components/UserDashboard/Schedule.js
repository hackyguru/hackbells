import React from "react";

export default function Schedule(props) {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2
                style={{ fontFamily: "Poppins" }}
                className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
              >
                Schedule {props.title}
                <br className="hidden md:block" />
                at your ease.
              </h2>
            </div>
            <div
              class="block p-4  bg-white border border-gray-100 shadow-sm rounded-xl"
              href=""
            >
              <h5
                style={{ fontFamily: "Poppins" }}
                class="mt-1 text-xl font-bold text-gray-900"
              >
                Schedule date for {props.title}
              </h5>
              <input
                className="border border-secondary rounded-md mt-5"
                type="date"
              />
            </div>{" "}
            <div
              class="block p-4 mt-10 bg-white border border-gray-100 shadow-sm rounded-xl"
              href=""
            >
              <h5
                style={{ fontFamily: "Poppins" }}
                class="mt-1 text-xl font-bold text-gray-900"
              >
                Schedule time for {props.title}
              </h5>
              <input
                className="border border-secondary rounded-md mt-5"
                type="date"
              />
            </div>{" "}
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/"
                style={{ fontFamily: "Poppins" }}
                className="inline-flex mt-10 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wid0e text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                <span className="">Regenerate QR</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
