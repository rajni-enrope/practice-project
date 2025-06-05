import React, { useState, useRef } from "react";



const ProfilePage = () => {


    return (
        <div className="flex flex-col gap-4">
            <div >
                <img src="/images/Default.png" alt="Image" className="w-32 h-32"></img>
                <h1>FullNmae</h1>
            </div>
            <div>
                <h1>EmailAddress</h1>
                <h1>DateofBirth</h1>
                <h1>gender</h1>
                <h1>Password</h1>
            </div>
        </div>
    );
};

export default ProfilePage;
