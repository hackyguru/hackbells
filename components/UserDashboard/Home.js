import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      {" "}
      <h1
        style={{ fontFamily: "Poppins" }}
        class="text-3xl font-extrabold sm:text-6xl text-primary"
      >
        Reservation
      </h1>
      <div>
        <div class="flex flex-wrap -mx-5 overflow-hidden lg:-mx-5">
          <div class="my-5 px-5 w-full overflow-hidden lg:my-5 lg:px-5 lg:w-1/3">
            <a class="block overflow-hidden shadow-xl rounded-3xl" href="">
              <img
                class="object-cover w-full h-64"
                src="https://www.hyperui.dev/photos/university-3.jpeg"
                alt=""
              />

              <div class="relative w-full p-6 -mt-8 bg-white rounded-3xl">
                <h5
                  style={{ fontFamily: "Poppins" }}
                  class="text-xl font-bold text-gray-900"
                >
                  Deluxe Room
                </h5>

                <p
                  style={{ fontFamily: "Montserrat" }}
                  class=" mt-2 text-gray-500 text-sm sm:block"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur commodi eligendi officiis laboriosam autem
                  eveniet.
                </p>

                <dl class="items-center mt-6 sm:flex">
                  <div class="flex items-center">
                    <span class="flex-shrink-0 p-1 text-white bg-primary rounded-full">
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </span>

                    <span class="flex ml-3 space-x-1 space-x-reverse text-sm font-medium text-gray-600 ">
                      <dt>Reviews</dt>
                      <dd class="order-first">0</dd>
                    </span>
                  </div>

                  <a
                    href="/availablity"
                    class="md:ml-16 mt-4 relative inline-flex items-center px-5 py-3 text-white bg-primary rounded-lg group"
                  >
                    <span class="absolute left-0 transition-transform transform -translate-x-full group-hover:translate-x-4">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        ></path>
                      </svg>
                    </span>

                    <span
                      style={{ fontFamily: "Poppins" }}
                      class="font-medium transition-all text-xs md:text-ms group-hover:ml-6"
                    >
                      Book Room
                    </span>
                  </a>
                </dl>
              </div>
            </a>
          </div>

          <div class="my-5 px-5 w-full overflow-hidden lg:my-5 lg:px-5 lg:w-1/3">
            <a class="block  overflow-hidden shadow-xl rounded-3xl" href="">
              <img
                class="object-cover w-full h-64"
                src="https://www.hyperui.dev/photos/university-3.jpeg"
                alt=""
              />

              <div class="relative w-full p-6 -mt-8 bg-white rounded-3xl">
                <h5
                  style={{ fontFamily: "Poppins" }}
                  class="text-xl font-bold text-gray-900"
                >
                  Suite Room
                </h5>

                <p
                  style={{ fontFamily: "Montserrat" }}
                  class=" mt-2 text-gray-500 text-sm sm:block"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur commodi eligendi officiis laboriosam autem
                  eveniet.
                </p>

                <dl class="items-center mt-6 sm:flex">
                  <div class="flex items-center">
                    <span class="flex-shrink-0 p-1 text-white bg-primary rounded-full">
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </span>

                    <span class="flex ml-3 space-x-1 space-x-reverse text-sm font-medium text-gray-600 ">
                      <dt>Reviews</dt>
                      <dd class="order-first">0</dd>
                    </span>
                  </div>

                  <a
                    href=""
                    class="md:ml-16 mt-4 relative inline-flex items-center px-5 py-3 text-white bg-primary rounded-lg group"
                  >
                    <span class="absolute left-0 transition-transform transform -translate-x-full group-hover:translate-x-4">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        ></path>
                      </svg>
                    </span>

                    <span
                      style={{ fontFamily: "Poppins" }}
                      class="font-medium transition-all text-xs md:text-ms group-hover:ml-6"
                    >
                      Book Room
                    </span>
                  </a>
                </dl>
              </div>
            </a>
          </div>

          <div class="my-5 px-5 w-full overflow-hidden lg:my-5 lg:px-5 lg:w-1/3">
            <a class="block overflow-hidden shadow-xl rounded-3xl" href="">
              <img
                class="object-cover w-full h-64"
                src="https://www.hyperui.dev/photos/university-3.jpeg"
                alt=""
              />

              <div class="relative w-full p-6 -mt-8 bg-white rounded-3xl">
                <h5
                  style={{ fontFamily: "Poppins" }}
                  class="text-xl font-bold text-gray-900"
                >
                  Double Room
                </h5>

                <p
                  style={{ fontFamily: "Montserrat" }}
                  class=" mt-2 text-gray-500 text-sm sm:block"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur commodi eligendi officiis laboriosam autem
                  eveniet.
                </p>

                <dl class="items-center mt-6 sm:flex">
                  <div class="flex items-center">
                    <span class="flex-shrink-0 p-1 text-white bg-primary rounded-full">
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </span>

                    <span class="flex ml-3 space-x-1 space-x-reverse text-sm font-medium text-gray-600 ">
                      <dt>Reviews</dt>
                      <dd class="order-first">0</dd>
                    </span>
                  </div>

                  <a
                    href=""
                    class="md:ml-16 mt-4 relative inline-flex items-center px-5 py-3 text-white bg-primary rounded-lg group"
                  >
                    <span class="absolute left-0 transition-transform transform -translate-x-full group-hover:translate-x-4">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        ></path>
                      </svg>
                    </span>

                    <span
                      style={{ fontFamily: "Poppins" }}
                      class="font-medium transition-all text-xs md:text-ms group-hover:ml-6"
                    >
                      Book Room
                    </span>
                  </a>
                </dl>
              </div>
            </a>
          </div>

          <div class="my-5 px-5 w-full overflow-hidden lg:my-5 lg:px-5 lg:w-1/3">
            <a class="block overflow-hidden shadow-xl rounded-3xl" href="">
              <img
                class="object-cover w-full h-64"
                src="https://www.hyperui.dev/photos/university-3.jpeg"
                alt=""
              />

              <div class="relative w-full p-6 -mt-8 bg-white rounded-3xl">
                <h5
                  style={{ fontFamily: "Poppins" }}
                  class="text-xl font-bold text-gray-900"
                >
                  Single Room
                </h5>

                <p
                  style={{ fontFamily: "Montserrat" }}
                  class=" mt-2 text-gray-500 text-sm sm:block"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur commodi eligendi officiis laboriosam autem
                  eveniet.
                </p>

                <dl class="items-center mt-6 sm:flex">
                  <div class="flex items-center">
                    <span class="flex-shrink-0 p-1 text-white bg-primary rounded-full">
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </span>

                    <span class="flex ml-3 space-x-1 space-x-reverse text-sm font-medium text-gray-600 ">
                      <dt>Reviews</dt>
                      <dd class="order-first">0</dd>
                    </span>
                  </div>

                  <a
                    href=""
                    class="md:ml-16 mt-4 relative inline-flex items-center px-5 py-3 text-white bg-primary rounded-lg group"
                  >
                    <span class="absolute left-0 transition-transform transform -translate-x-full group-hover:translate-x-4">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        ></path>
                      </svg>
                    </span>

                    <span
                      style={{ fontFamily: "Poppins" }}
                      class="font-medium transition-all text-xs md:text-ms group-hover:ml-6"
                    >
                      Book Room
                    </span>
                  </a>
                </dl>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
