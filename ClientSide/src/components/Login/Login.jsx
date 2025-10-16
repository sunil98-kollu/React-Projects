import React from "react";
import { useState } from "react";
 import CoursePage from "../../pages/CoursePage";
import { useNavigate} from "react-router-dom";

export default function Login() {
     const navigate = useNavigate();
       const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

   async function goToLogin(){
     navigate("/CoursePage");
   }
    async function goToRegister () {
    navigate("/Register");
  };
  return (
   <>
      <div  className="flex items-center justify-center min-h-screen">
        <div className=" border border-gray-300 rounded-lg p-6 bg-white  h-100%  w-90  ">
          <div className="mt-10">
            <h2 class="text-2xl/7 font-bold text-blue-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Welcome to Course Enquiry
            </h2>
            <p class="font-sans text-blue-900">
                Login and Go to your course and study ...
            </p>
            <div className="flex flex-col w-[300px] mx-auto gap-2 mt-[10px]">
              <form action="#" method="POST" class="space-y-6" >
                <div>
                  <div class="flex items-center justify-between">
                    <label
                      for="emailAddress"
                      class="block text-sm/6 font-medium text-black-500"
                    >
                      Email Address
                    </label>
                  </div>
                  <div class="mt-2">
                    <input
                      id="emailAddress"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base text-ted outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label
                      for="password"
                      class="block text-sm/6 font-medium text-black-500"
                    >
                      Password
                    </label>
                  </div>
                  <div class="mt-2">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base text-ted outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <button
                  type="button"
                  onClick={goToLogin}
                  class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Login
                </button>
                 <div className="text-center mt-2">
                  <span>Dont have  have an account? </span>
                  <a href=""  class="text-blue-700"  onClick={goToRegister}>Register here</a>       
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
