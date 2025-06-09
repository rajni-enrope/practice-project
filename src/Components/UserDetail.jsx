const UserDetails =()=>{
    return(
        <div className="p-4 max-w-screen-sm mx-auto overflow-hidden gap-4">
            <h1 className="text-center mb-4 text-lg sm:text-xl md:text-2xl font-medium break-words">Welcome To User Managment System</h1>
       <div>
        {/* <h1 className=" text-lg font-medium text-black">User name -{""}{localStorage.getItem("FullName")?localStorage.getItem("FullName"):"NA"}</h1>
        <h1 className=" text-lg font-medium text-black">Email Address -{""}{localStorage.getItem("EmailAddress")?localStorage.getItem("EmailAddress"):"NA"} </h1>
        <h1 className=" text-lg font-medium text-black">Password - {""}{localStorage.getItem("Password")?localStorage.getItem("Password"):"NA"}</h1>
        <h1 className=" text-lg font-medium text-black">Date Of Birth -  {""}{localStorage.getItem("DateOfBirth")?localStorage.getItem("DateOfBirth"):"NA"}</h1>
        <h1 className=" text-lg font-medium text-black">About - {""}{localStorage.getItem("About")?localStorage.getItem("About"):"NA"}</h1> */}
       </div>

       <div className=" space-y-2 text-sm sm:text-base md:text-lg break-word">
                    <p ><strong>User name:</strong> {""}{localStorage.getItem("FullName") || "NA"}</p>
                    <p><strong>Email Address:</strong> {""}{localStorage.getItem("EmailAddress") || "NA"}</p>
                    <p><strong>Password:</strong> {""}{localStorage.getItem("Password") || "NA"}</p>
                    <p><strong>About:</strong> {""}{localStorage.getItem("About") || "NA"}</p>
                    <p><strong>Date of Birth:</strong> {""}{localStorage.getItem("DateOfBirth") || "NA"}</p>
       </div>
        </div>
    ); 
};
export default UserDetails;