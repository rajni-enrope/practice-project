const UserDetails =()=>{
    return(
        <div>
            <h1 className="text-center text-2xl font-bold text-blue-600">Welcome To User Managment System</h1>
       <div>
        <h1 className=" text-lg font-medium text-black">User name -{""}{localStorage.getItem("FullName")?localStorage.getItem("FullName"):"NA"}</h1>
        <h1 className=" text-lg font-medium text-black">Email Address -{""}{localStorage.getItem("EmailAddress")?localStorage.getItem("EmailAddress"):"NA"} </h1>
        <h1 className=" text-lg font-medium text-black">Password - {""}{localStorage.getItem("Password")?localStorage.getItem("Password"):"NA"}</h1>
        <h1 className=" text-lg font-medium text-black">Date Of Birth -  {""}{localStorage.getItem("DateOfBirth")?localStorage.getItem("DateOfBirth"):"NA"}</h1>
        <h1 className=" text-lg font-medium text-black">About - {""}{localStorage.getItem("About")?localStorage.getItem("About"):"NA"}</h1>
       </div>
        </div>
    ); 
};
export default UserDetails;