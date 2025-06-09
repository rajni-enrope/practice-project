import React, { useState, useRef } from "react";
import {  toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

//  <Route path="/Dashboard" element={<Dashboard />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/AddNewUser" element={<AddNewUser />} />


const Login = () => {
  
const navigate = useNavigate();
// for geting local storage
  const[Email,SetEmail] = useState("");
  const[Password, Setpassword] = useState("");

  const handleSignUp = () => {
 navigate("/signup");// or "/AddNewUser" if that's your signup page
};
  
  //Getting Email and Password 
  // const userName = localStorage.getItem("email") ? localStorage.getItem("email") : "User@121.com";
  // const userPassword = localStorage.getItem("Password") ? localStorage.getItem("Password") : "User121";


    //submit function
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const errors = validate(formValues);
    //     setFormErrors(errors);

    //     if (Object.keys(errors).length === 0) {
    //         setIsSubmitted(true);
    //         console.log("Form submitted:", formValues);
    //     } else {
    //         setIsSubmitted(false);
    //     }
    // };



  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("EmailAddress");
    const storedPassword = localStorage.getItem("Password");

    if (Email === storedEmail && Password === storedPassword) {
      toast.success("Login Successful!");
      navigate("/Dashboard"); // change this to your desired page
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">User Management System</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1"> Email Address</label>
            <input type="text" id="Email" name="Email" placeholder="Enter your Email Address" value={Email} onChange={(e =>SetEmail(e.target.value))}className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>
<div>
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700 mb-1">Password </label>
            <input type="password" id="Password" name="Password" placeholder="Enter your Password" value={Password}onChange={(e =>Setpassword(e.target.value))} className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div className="text-sm text-gray-600 text-center">
             {/* Don't have an account?{" "} */}
            <h1>Don't have an account?</h1>
           <button type="button" onClick={handleSignUp}> Sign Up</button>
          </div>

          <div>
            <button type="submit"  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"> Login </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
