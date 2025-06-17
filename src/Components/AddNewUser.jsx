import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

const AddNewUser = () => {
    const [formErrors, setFormErrors] = useState({});
    const [formValues, setFormValues] = useState({
        FullName: "",
        EmailAddress: "",
        DateofBirth: "",
        Gender: "",     // Capital G here
        Password: "",
        About: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!values.FullName.trim()) {
            errors.FullName = "Full name is required";
        } else if (values.FullName.length < 3) {
            errors.FullName = "Full name must be at least 3 characters";
        }

        if (!values.EmailAddress.trim()) {
            errors.EmailAddress = "Email is required";
        } else if (!emailRegex.test(values.EmailAddress)) {
            errors.EmailAddress = "Invalid email format";
        }

        if (!values.DateofBirth) {
            errors.DateofBirth = "Date of birth is required";
        }

        if (!values.Gender) {
            errors.Gender = "Gender is required";
        }

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
            toast.success("User profile created successfully!");
            console.log("Form submitted:", formValues);
            // Do your submission logic here (e.g. API call)
        } else {
            toast.error("Please fix the form errors.");
        }
    };

    return (
        <div >
            <h1 className="p-4 pb-[5px] text-xl font-bold text-center">SignUp For NewUser</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-10 p-4">
                    <div className="flex flex-col gap-4  md:w-1/2">
                        <div>
                            <label htmlFor="FullName" className="text-sm font-medium text-gray-700"> Full Name</label>
                            <input type="text" id="FullName" name="FullName" placeholder="Enter your full name" value={formValues.FullName} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full" />
                            {formErrors.FullName && <p className="text-red-500 text-sm">{formErrors.FullName}</p>}
                        </div>

                        <div>
                            <label htmlFor="EmailAddress" className="text-sm font-medium text-gray-700"> Email Address </label>
                              <input type="email" id="EmailAddress" name="EmailAddress" placeholder="Enter your Email Address" value={formValues.EmailAddress} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full" />
                          
                            {formErrors.EmailAddress && <p className="text-red-500 text-sm">{formErrors.EmailAddress}</p>}
                        </div>

                        <div>
                            <label htmlFor="DateofBirth" className="text-sm font-medium text-gray-700"> Date of Birth </label>  <input type="date" id="DateofBirth" name="DateofBirth" value={formValues.DateofBirth} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full" />
                            {formErrors.DateofBirth && <p className="text-red-500 text-sm">{formErrors.DateofBirth}</p>}
                        </div>

                        <div>
                            <label htmlFor="Gender" className="text-sm font-medium text-gray-700">Gender</label>
                            <select id="Gender" name="Gender" required value={formValues.Gender} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {formErrors.Gender && <p className="text-red-500 text-sm">{formErrors.Gender}</p>}
                        </div>

                        <div>
                            <label htmlFor="Password" className="text-sm font-medium text-gray-700"> Password </label>
                            <input type="password" id="Password" name="Password" placeholder="Enter your password" value={formValues.Password} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full" />
                            {formErrors.Password && <p className="text-red-500 text-sm">{formErrors.Password}</p>}
                        </div>

                        <div>
                            <label htmlFor="About" className="text-sm font-medium text-gray-700"> About </label>
                            <textarea id="About" name="About" rows="4" cols="50" placeholder="Type your message here..." value={formValues.About} onChange={handleChange} className="border border-gray-400 p-2 rounded w-full" />
                        </div>
                    </div>

                    
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-gray-800 mt-4 mx-4">Submit
                </button>
            </form>
        </div>
    );
};

export default AddNewUser;