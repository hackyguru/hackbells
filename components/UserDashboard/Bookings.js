import React from "react";

export default function Bookings() {
  return (
    <div className="p-10 min-w-full">
      {" "}
      <h1
        style={{ fontFamily: "Poppins" }}
        class="text-3xl font-extrabold sm:text-6xl text-primary"
      >
        Booking History
      </h1>
      <section class="container  mt-10  w-full">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th
                    style={{ fontFamily: "Poppins" }}
                    class="px-4 text-xs md:text-ms py-3"
                  >
                    Date
                  </th>
                  <th
                    style={{ fontFamily: "Poppins" }}
                    class="px-4 text-xs md:text-ms py-3"
                  >
                    Booking address
                  </th>
                  <th
                    style={{ fontFamily: "Poppins" }}
                    class="px-4 text-xs md:text-ms py-3"
                  >
                    Status
                  </th>
                  <th
                    style={{ fontFamily: "Poppins" }}
                    class="px-4 text-xs md:text-ms py-3"
                  >
                    Booking Confirmation
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: "Montserrat" }} class="bg-white">
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-xs md:text-ms border">
                    11/12/2021
                  </td>
                  <td class="px-4 py-3 text-ms text-xs md:text-ms  border">
                    0xu4r85875986795679
                  </td>
                  <td class="px-4 py-3 text-xs  border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      Checked in{" "}
                    </span>
                  </td>
                  <td class="px-4 py-3 text-ms border">
                    <a
                      href=""
                      class="relative inline-flex items-center px-5 py-3 text-white bg-primary rounded-lg group"
                    >
                      <span class="absolute left-0 transition-transform transform -translate-x-full group-hover:translate-x-4">
                        <svg
                          class="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>

                      <span class="font-medium transition-all text-xs md:text-ms group-hover:ml-6">
                        Download PDF
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
