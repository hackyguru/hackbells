import React from "react";
import "@fontsource/montserrat";
import "@fontsource/poppins/700.css";

export default function Footer() {
  return (
    <div>
      <footer class="min-w-screen text-white items-center bg-gradient-to-r from-rose-700 to-pink-600">
        <div class="min-w-screen text-center items-center px-4 pb-8 mx-auto pt-7 sm:px-6 lg:px-8">
          <div
            style={{ fontFamily: "Montserrat" }}
            class="sm:items-center md:text-center text-center  sm:flex"
          >
            Made with ❤️ at Hack Bells 2021.
          </div>
        </div>
      </footer>
    </div>
  );
}
