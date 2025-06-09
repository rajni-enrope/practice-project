import React, { useState, useRef } from "react";



const ProfilePage = () => {
    // const UserDeatils = ["FullNmae :", "DateofBirth :", "Gender :", "Password :"]

    //     return (
    //         <div className="min-h-screen p-4 flex flex-col items-center justify-center bg-gray-100 ">
    //             <h1 className=" text-center font-bold text-[30px] text-blue-600 " >Welcome to Profile of User </h1><br />
    //             <div className="flex  gap-10  items-center" >
    //                 <div className="flex flex-col md:flex-row gap-6 items-center">
    //                     <img src={localStorage.getItem("userImage") || "/images/Default.png"}alt="User Profile"className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover borderr"></img>
    //                 </div>
    //                 <div>
    //                     <div>
    //                         <h1 className=" font-medium text-[15px]">FullNmae: {""}{localStorage.getItem("FullName")?localStorage.getItem("FullName"):"NA"}</h1>
    //                         <h1 className=" font-medium text-[15px]">Email Address: {""}{localStorage.getItem("EmailAddress")?localStorage.getItem("EmailAddress"):"NA"}</h1>
    //                         <h1 className=" font-medium text-[15px]">Password: {""}{localStorage.getItem("Password")?localStorage.getItem("Password"):"NA"}</h1>
    //                          <h1 className=" font-medium text-[15px]">Gender: {""}{localStorage.getItem("Gender")?localStorage.getItem("Gender"):"NA"}</h1>
    //                           <h1 className=" font-medium text-[15px]">DateofBirth: {""}{localStorage.getItem("DateOfBirth")?localStorage.getItem("DateOfBirth"):"NA"}</h1>
    //                         {/* {UserDeatils.map((name, index) => (
    //                             <h1 key={index} className="text-center font-medium text-[15px]">{name}</h1>
    //                         ))} */}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    return (
        <div className="p-4 max-w-screen-sm mx-auto overflow-hidden">
            <h1 className="text-center mb-4 text-xl md:text-2xl font-medium break-words">Welcome to Profile of User</h1>
            <div className="grid md:grid-cols-2  md:items-center md:text-left sm:max-xl:bg-blue-50 place-items-center">
                 {/* <div className="grid md:grid-cols-2 gap-4 md:items-center text-center md:text-left sm:max-xl:bg-blue-50 place-items-center"> */}
                 {/* <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border overflow-hidden mx-auto"> */}
              <div className="grid md:grid-cols-2 gap-4 md:items-center text-center md:text-left sm:max-xl:bg-blue-50 place-items-center">
        <img
          src={localStorage.getItem("userImage") || "/images/Default.png"}
          alt="User Profile"
          className="w-full h-full object-cover "
        />
      </div>

                <div className=" space-y-2 text-sm sm:text-base md:text-lg break-word">
                    {/* <h1 className=" md:text-2xl  mb-2 font-medium   text-2xl  break-words">FullName: {""}{localStorage.getItem("FullName") ? localStorage.getItem("FullName") : "NA"}</h1>
                <h1 className=" md:text-2xl  mb-2 font-medium   text-2xl  break-words">Email Address: {""}{localStorage.getItem("EmailAddress") ? localStorage.getItem("EmailAddress") : "NA"}</h1>
                <h1 className=" md:text-2xl  mb-2 font-medium   text-2xl  break-words">Password: {""}{localStorage.getItem("Password") ? localStorage.getItem("Password") : "NA"}</h1>
                <h1 className=" md:text-2xl  mb-2 font-medium   text-2xl  break-words">Gender: {""}{localStorage.getItem("Gender") ? localStorage.getItem("Gender") : "NA"}</h1>
                <h1 className=" md:text-2xl  mb-2 font-medium   text-2xl  break-words">DateofBirth: {""}{localStorage.getItem("DateOfBirth") ? localStorage.getItem("DateOfBirth") : "NA"}</h1> */}
                    <p ><strong>Full Name:</strong> {localStorage.getItem("FullName") || "NA"}</p>
                    <p><strong>Email Address:</strong> {localStorage.getItem("EmailAddress") || "NA"}</p>
                    <p><strong>Password:</strong> {localStorage.getItem("Password") || "NA"}</p>
                    <p><strong>Gender:</strong> {localStorage.getItem("Gender") || "NA"}</p>
                    <p><strong>Date of Birth:</strong> {localStorage.getItem("DateOfBirth") || "NA"}</p>
                </div>

            </div>


        </div>



    );
};
export default ProfilePage;
