import React from "react";

export default function QR() {
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
                Unlock your hotel door
                <br className="hidden md:block" />
                with this unique QR.
              </h2>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/"
                style={{ fontFamily: "Poppins" }}
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wid0e text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                <span className="">Regenerate QR</span>
              </a>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
            <a
              href="/"
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
            >
              <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                <svg
                  className="w-10 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
