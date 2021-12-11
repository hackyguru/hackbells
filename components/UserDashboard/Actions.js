import React from "react";

export default function Actions() {
  return (
    <div className="p-10">
      {" "}
      <h1
        style={{ fontFamily: "Poppins" }}
        class="text-3xl font-extrabold sm:text-6xl text-primary"
      >
        My Room
      </h1>
      <div class="text-center mt-20 md:ml-40 w-full h-full">
        <img
          src="https://www.hyperui.dev/photos/confused-travolta.gif"
          alt="John Travolta confused"
          class="object-cover w-full h-64 rounded-lg"
        />

        <p class="mt-6 text-gray-500">We can't find an active room booking.</p>
      </div>
    </div>
  );
}
