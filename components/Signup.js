import React from "react";
import { useMoralis } from "react-moralis";

export default function Signup() {
  const { authenticate, isAuthenticated, logout, user, authError, signup } =
    useMoralis();
  return (
    <div>
      <div class="bg-bg max-h-screen  max-w-screen px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg  mx-auto">
          <h1
            style={{ fontFamily: "Poppins" }}
            class="text-2xl font-bold text-center text-primary sm:text-3xl"
          >
            Get started today
          </h1>

          <p class="max-w-md mx-auto mt-4 text-center text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            action=""
            class="p-8 bg-white mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <p class="text-lg font-medium" style={{ fontFamily: "Poppins" }}>
              Sign up to your account
            </p>

            <div>
              <label for="email" class="text-sm font-medium">
                Email
              </label>

              <div class="relative mt-1">
                <input
                  type="email"
                  id="email"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              style={{ fontFamily: "Poppins" }}
              class="block w-full px-5 py-3 text-sm font-medium text-white bg-primary rounded-lg"
              onClick={() => authenticate()}
            >
              Connect Metamask and sign in
            </button>

            <button
              style={{ fontFamily: "Poppins" }}
              class="block w-full px-5 py-3 text-sm font-medium text-white bg-primary rounded-lg"
              onClick={() => logout()}
            >
              sign out
            </button>

            <p class="text-sm text-center text-gray-500">
              No account?
              <a class="underline" href="">
                Sign up
              </a>
              {isAuthenticated && <div>{user.attributes.ethAddress}</div>}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
