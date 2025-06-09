import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditProfileNew = () => {
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});
    const [UserName, setUserName] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")
    const [DateofBirth, setDateofBirth] = useState("")
    const [Password, setPassword] = useState("")
    const [Gender, setGender] = useState("")
    const [img, setimg] = useState("")
    const [About, setAbout] = useState("")



    //convert iamge
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    // local se autofill data get
    useEffect(() => {
        setUserName(localStorage.getItem("FullName") || "");
        setEmailAddress(localStorage.getItem("EmailAddress") || "");
        setDateofBirth(localStorage.getItem("DateOfBirth") || "");
        setPassword(localStorage.getItem("Password") || "");
        setGender(localStorage.getItem("Gender") || "");
        setAbout(localStorage.getItem("About") || "");

         const savedImage = localStorage.getItem("userImage");
    if (savedImage) {
        setImagePreview(savedImage);
        setimg(savedImage);
    }
}, []);
    // hangle iamge form geting localstorage 

    //     // use to upload automaticall  data from local when user render 
    //      useEffect(() => {
    //     setFullName(localStorage.getItem("FullName") || "Default Name");
    //     setEmailAddress(localStorage.getItem("EmailAddress") || "User@121.com");
    //     setDateofBirth(localStorage.getItem("DateOfBirth") || "01-01-2000");
    //     setPassword(localStorage.getItem("Password") || "User121");
    //     setGender(localStorage.getItem("Gender") || "Not Specified");
    //       }, []);



    // ImageChange State
    const [imagePreview, setImagePreview] = useState("/images/default-profile.png");
    const [imageFile, setImageFile] = useState(null); // store image file for validation
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
        // fileInputRef.current points to the hidden <input type="file" of image  />.
    };
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const base64 = await getBase64(file);
            setImagePreview(base64);
            setimg(base64); // Save for localStorage
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (UserName === "") {
            toast.error("Name is required");
        } else if (EmailAddress === "") {
            toast.error("Email is required");
        } else if (Password === "") {
            toast.error("Password is required");
        } else {
            localStorage.setItem("FullName", UserName);
            localStorage.setItem("EmailAddress", EmailAddress);
            localStorage.setItem("Password", Password);
            localStorage.setItem("DateOfBirth", DateofBirth);
            localStorage.setItem("Gender", Gender);
            localStorage.setItem("About", About);
            localStorage.setItem("userImage", img); // img must be set correctly

            toast.success("User Saved");
            navigate("/Dashboard"); // Optional: if navigation is expected
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-4  ">
            <h1 className="p-4 pb-[5px] text-lg md:text-xl font-bold text-center">Your Profile</h1>
           <div>
             <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-10 p-4 ">
                    <div className="flex flex-col gap-4 w-full md:w-1/2 md:gap-10">
                        <div >
                            <label htmlFor="FullName" className="text-xs md:text-sm font-medium text-gray-700">User Name</label>
                            <input type="text" id="FullName" name="FullName" placeholder="Enter your Email Address" value={UserName} onChange={(e) => setUserName(e.target.value)} className="border border-gray-400 p-2 rounded w-full" />
                        </div>
                        <div>
                            <label htmlFor="EmailAddress" className="text-xs md:text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="EmailAddress" name="EmailAddress" placeholder="Enter your Email Address" value={EmailAddress} onChange={(e) => setEmailAddress(e.target.value)} className="border border-gray-400 p-2 rounded w-full" />
                        </div>
                        <div>
                            <label htmlFor="DateofBirth" className="text-xs md:text-sm font-medium text-gray-700">Date of Birth</label>
                            <input type="date" id="DateofBirth" name="DateofBirth" value={DateofBirth} onChange={(e) => setDateofBirth(e.target.value)} className="border border-gray-400 p-2 rounded w-full" />
                        </div>
                        <div>
                            <label htmlFor="gender" className="text-xs md:text-sm font-medium text-gray-700">Gender</label>
                            <select id="gender" name="gender" required value={Gender} onChange={(e) => setGender(e.target.value)} className="border border-gray-400 p-2 rounded w-full">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="Password" className="text-xs md:text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="Password" name="Password" placeholder="Enter your Password" value={Password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-400 p-2 rounded w-full" />
                        </div>
                        <div>
                            <label htmlFor="About" className="text-xs md:text-sm font-medium text-gray-700">About</label>
                            <textarea id="About" name="About" rows="4" cols="50" placeholder="Type your message here..." value={About} onChange={(e) => setAbout(e.target.value)} className="border border-gray-400 p-2 rounded w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">

                        <label className="text-xs md:text-sm font-bold text-gray-700">Upload Image</label><br />
                        <input type="file" name="img" id="img" accept="image/*" onChange={handleImageChange} ref={fileInputRef} style={{ display: "none" }} />
                        <img src={imagePreview} alt="Profile" id="profilePic" className="w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:w-60  object-cover rounded-full mx-auto  border-gray-300 " /><br />
                        {formErrors.Image && <p className="text-red-500 text-sm">{formErrors.Image}</p>}
                        <button type="button" onClick={handleButtonClick} className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200">Select Profile Pic</button>



                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-gray-800 mt-4 mx-4">Submit</button>
            </form>
           </div>
        </div>
    )
};
export default EditProfileNew