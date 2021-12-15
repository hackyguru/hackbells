import React from "react";

export default function Profile() {
  return (
    <div className="p-10">
      {" "}
      <h1
        style={{ fontFamily: "Poppins" }}
        class="text-3xl font-extrabold sm:text-6xl text-primary"
      >
        Profile
      </h1>
      <form action="" class="max-w-xl mx-auto mt-8 mb-0 space-y-4">
        <div>
          <label for="email" class="sr-only">
            Email
          </label>

          <div class="relative">
            Name
            <input
              type="text"
              class="w-full p-4 mt-3 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Guru"
            />
          </div>
        </div>

        <div>
          <label for="email" class="sr-only">
            Email
          </label>
          <div class="relative">
            Email
            <input
              type="email"
              class="w-full p-4 pr-12  mt-3 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="guru@guru.com"
            />
          </div>
        </div>

        <div>
          <label for="email" class="sr-only">
            Ethereum address
          </label>
          <div class="relative">
            Ethereum address
            <input
              type="ethAddress"
              class="w-full p-4 pr-12  mt-3 mb-10 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="0x3F7c7FC1E76a632fBa3ab74bad4a8F7cbF894800"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-primary rounded-lg"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
