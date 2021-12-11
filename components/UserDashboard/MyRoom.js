import React from "react";

export default function MyRoom() {
  return (
    <div className="p-10 min-w-full mb-20">
      {" "}
      <h1
        style={{ fontFamily: "Poppins" }}
        class="text-3xl font-extrabold sm:text-6xl text-primary"
      >
        My Room
      </h1>
      <div class="mt-10 w-full h-full">
        <div class="flex flex-wrap -mx-2 overflow-hidden lg:-mx-4">
          <div class="my-2 px-2 w-full overflow-hidden lg:my-4 lg:px-4 lg:w-1/4">
            <a
              class="block p-8 text-primary bg-third  shadow-xl rounded-xl"
              href="/unlockdoor"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"></path>
              </svg>

              <h3
                style={{ fontFamily: "Poppins" }}
                class="mt-3 text-xl font-bold text-primary "
              >
                Keyless checkin
              </h3>

              <p
                style={{ fontFamily: "Montserrat" }}
                class="mt-4 text-sm text-secondary"
              >
                Use QR code to unlock your room door.
              </p>
            </a>
          </div>
          <div class="my-2 px-2 w-full overflow-hidden lg:my-4 lg:px-4 lg:w-1/4">
            <a
              class="block p-8 text-primary bg-third  shadow-xl rounded-xl"
              href=""
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <a>
                <h3
                  style={{ fontFamily: "Poppins" }}
                  class="mt-3 text-xl font-bold text-primary "
                >
                  Room service
                </h3>

                <p
                  style={{ fontFamily: "Montserrat" }}
                  class="mt-4 text-sm text-secondary"
                >
                  Use QR code to unlock your room door.
                </p>
              </a>
            </a>
          </div>
          <div class="my-2 px-2 w-full overflow-hidden lg:my-4 lg:px-4 lg:w-1/4">
            <a
              class="block p-8 text-primary bg-third  shadow-xl rounded-xl"
              href=""
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <h3
                style={{ fontFamily: "Poppins" }}
                class="mt-3 text-xl font-bold text-primary "
              >
                Laundry
              </h3>

              <p
                style={{ fontFamily: "Montserrat" }}
                class="mt-4 text-sm text-secondary"
              >
                Use QR code to unlock your room door.
              </p>
            </a>
          </div>
          <div class="my-2 px-2 w-full overflow-hidden lg:my-4 lg:px-4 lg:w-1/4">
            <a
              class="block p-8 text-primary bg-third  shadow-xl rounded-xl"
              href=""
            >
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
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                ></path>
              </svg>

              <h3
                style={{ fontFamily: "Poppins" }}
                class="mt-3 text-xl font-bold text-primary "
              >
                Restaurant
              </h3>

              <p
                style={{ fontFamily: "Montserrat" }}
                class="mt-4 text-sm text-secondary"
              >
                Use QR code to unlock your room door.
              </p>
            </a>
          </div>
          <div class="my-2 px-2 w-full overflow-hidden lg:my-4 lg:px-4 lg:w-1/4">
            <a
              class="block p-8 text-primary bg-third  shadow-xl rounded-xl"
              href=""
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <h3
                style={{ fontFamily: "Poppins" }}
                class="mt-3 text-xl font-bold text-primary "
              >
                Support
              </h3>

              <p
                style={{ fontFamily: "Montserrat" }}
                class="mt-4 text-sm text-secondary"
              >
                Use QR code to unlock your room door.
              </p>
            </a>
          </div>{" "}
          <div class="my-2 px-2 w-full overflow-hidden lg:my-4 lg:px-4 lg:w-1/4">
            <a
              class="block p-8 text-primary bg-third  shadow-xl rounded-xl"
              href=""
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <h3
                style={{ fontFamily: "Poppins" }}
                class="mt-3 text-xl font-bold text-primary "
              >
                Booking Invoice
              </h3>

              <p
                style={{ fontFamily: "Montserrat" }}
                class="mt-4 text-sm text-secondary"
              >
                Use QR code to unlock your room door.
              </p>
            </a>
          </div>{" "}
          <div class="my-2 px-2 w-full overflow-hidden lg:my-4 lg:px-4 lg:w-1/4">
            <a
              class="block p-8 text-primary bg-third  shadow-xl rounded-xl"
              href=""
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <h3
                style={{ fontFamily: "Poppins" }}
                class="mt-3 text-xl font-bold text-primary "
              >
                Wifi
              </h3>

              <p
                style={{ fontFamily: "Montserrat" }}
                class="mt-4 text-sm text-secondary"
              >
                Use QR code to unlock your room door.
              </p>
            </a>
          </div>{" "}
          <div class="my-2 px-2 w-full overflow-hidden lg:my-4 lg:px-4 lg:w-1/4">
            {/* <a
              class="block p-8 text-primary bg-third  shadow-xl rounded-xl"
              href=""
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"></path>
              </svg>

              <h3
                style={{ fontFamily: "Poppins" }}
                class="mt-3 text-xl font-bold text-primary "
              >
                Keyless Login
              </h3>

              <p
                style={{ fontFamily: "Montserrat" }}
                class="mt-4 text-sm text-secondary"
              >
                Use QR code to unlock your room door.
              </p>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
