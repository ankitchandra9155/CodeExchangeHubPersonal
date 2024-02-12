import React, { useState } from 'react'
export default function Signup({setIsSignUp}) {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleNameChange=(e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmitButton=async(e)=>{
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)
        try {
            // Make a POST request to the signup endpoint
            const response = await fetch('http://localhost:8080/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                email,
                password,
              }),
            });
      
            // Check if the request was successful (status code 2xx)
            if (response.ok) {
              console.log('Signup successful!');
              // You can handle the success response here
            } else {
              // Handle errors if the request was not successful
              console.error('Signup failed. Status:', response.status);
            }
          } catch (error) {
            console.error('An error occurred during signup:', error);
          }
        };



    return (<>
        <div
            id="login-popup"
            tabIndex={-1}
            className="backdrop-blur-md overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
        >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow">
                    <button
                        // onClick={()=>{setIsSignUp(false)}}
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="#c6c7c7"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">Close popup</span>
                    </button>
                    <div className="p-5">
                        <h3 className="text-2xl mb-0.5 font-medium" />
                        <p className="mb-4 text-sm font-normal text-gray-800" />
                        <div className="text-center">
                            <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                                Sign up to your account
                            </p>
                            <p className="mt-2 text-sm leading-4 text-slate-600">
                                You must be signed in to perform this action.
                            </p>
                        </div>
                        <div className="mt-7 flex flex-col gap-2">  
                        </div>
                        <form className="w-full">
                            <label htmlFor="email" className="sr-only">
                                Full Name
                            </label>
                            <input
                                name="name"
                                type="text"                         
                                required=""
                                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                placeholder="Full Name"
                                defaultValue=""
                                onChange={handleNameChange}
                            />
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                required=""
                                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                placeholder="Email Address"
                                defaultValue=""
                                onChange={handleEmailChange}
                            />
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required=""
                                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                placeholder="Password"
                                defaultValue=""
                                onChange={handlePasswordChange}
                            />
                            <p className="mb-3 mt-2 text-sm text-gray-500">

                            </p>
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                                onClick={handleSubmitButton}
                            >
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>)
}