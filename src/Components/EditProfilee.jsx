import React, { useState, useRef } from "react";

const EditProfileNew = () => {
    const initialValues = { FullName: "", EmailAddress: "", DateofBirth: "", Password: "", gender: "", };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(e.target)
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    };




    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Full Name
        if (!values.FullName.trim()) {
            errors.FullName = "Full name is required";
        } else if (values.FullName.length < 3) {
            errors.FullName = "Full name must be at least 3 characters";
        }

        // Email
        if (!values.EmailAddress.trim()) {
            errors.EmailAddress = "Email is required";
        } else if (!emailRegex.test(values.EmailAddress)) {
            errors.EmailAddress = "Invalid email format";
        }

        // Date of Birth
        if (!values.DateofBirth) {
            errors.DateofBirth = "Date of birth is required";
        }

        // Gender
        if (!values.gender) {
            errors.gender = "Gender is required";
        }

        // Password
        if (!values.Password) {
            errors.Password = "Password is required";
        } else if (values.Password.length < 6) {
            errors.Password = "Password must be at least 6 characters";
        }
        if (!imageFile) {
            errors.Image = "Profile picture is required";
        }
        return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
            console.log("Form submitted:", formValues);
        } else {
            setIsSubmitted(false);
        }
    };




    // ImageChange State
    const [imagePreview, setImagePreview] = useState("/images/default-profile.png");
    const [imageFile, setImageFile] = useState(null); // store image file for validation
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
        // fileInputRef.current points to the hidden <input type="file" of image  />.
    };



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImagePreview(imageURL);
            // e.target.files[0]: Gets the first file selected.
            // URL.createObjectURL(file): Generates a temporary local URL for preview.
        }
    };


    return (
        <div>
            <h1 className="p-4 pb-[5px] text-xl font-bold text-center">Your Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-10 p-4">
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <div>
                            <label htmlFor="FullName" className="text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="FullName" name="FullName" placeholder="Enter your Email Address" value={formValues.FullName} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full" />
                            {formErrors.FullName && <p className="text-red-500 text-sm">{formErrors.FullName}</p>}
                        </div>
                        <div>
                            <label htmlFor="EmailAddress" className="text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="EmailAddress" name="EmailAddress" placeholder="Enter your Email Address" value={formValues.EmailAddress} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full" />
                            {formErrors.EmailAddress && <p className="text-red-500 text-sm">{formErrors.EmailAddress}</p>}
                        </div>
                        <div>
                            <label htmlFor="DateofBirth" className="text-sm font-medium text-gray-700">Date of Birth</label>
                            <input type="date" id="DateofBirth" name="DateofBirth" value={formValues.DateofBirth} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full" />
                            {formErrors.DateofBirth && <p className="text-red-500 text-sm">{formErrors.DateofBirth}</p>}
                        </div>
                        <div>
                            <label htmlFor="gender" className="text-sm font-medium text-gray-700">Gender</label>
                            <select id="gender" name="gender" required value={formValues.gender} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {formErrors.gender && <p className="text-red-500 text-sm">{formErrors.gender}</p>}
                        </div>
                        <div>
                            <label htmlFor="Password" className="text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="Password" name="Password" placeholder="Enter your Password" value={formValues.Password} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full" />
                            {formErrors.Password && <p className="text-red-500 text-sm">{formErrors.Password}</p>}
                        </div>
                        <div>
                            <label htmlFor="About" className="text-sm font-medium text-gray-700">About</label>
                            <textarea id="About" name="About" rows="4" cols="50" placeholder="Type your message here..." className="border border-gray-400 p-2 rounded w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">

                        <label className="text-sm font-bold text-gray-700">Upload Image</label><br/>
                        <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} style={{ display: "none" }} />
                        <img src={imagePreview} alt="Profile" id="profilePic" className="w-40 h-40 object-cover border border-gray-300 rounded" /><br/>
                        {formErrors.Image && <p className="text-red-500 text-sm">{formErrors.Image}</p>}
                        <button type="button" onClick={handleButtonClick} className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200">Select Profile Pic</button>



                    </div>
                </div>
<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-gray-800 mt-4 mx-4">Submit</button>
            </form>
        </div>
    )
};
export default EditProfileNew