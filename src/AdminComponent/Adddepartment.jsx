// thhis is for object i have only one input
// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEnterDepartmentName((prev) => ({ ...prev, [name]: value, })
//     );
// };

import { useState } from "react";

const DepartmentItem = ({ isOpen, onClose, onSave }) => {
    const [formErrors, setFormErrors] = useState({});
    const [enterDepartmentName, setEnterDepartmentName] = useState("");

    if (!isOpen) return null;

    // Validate the input
    const validate = (value) => {
        const errors = {};
        if (!value.trim()) {
            errors.name = "Department name is required";
        }
        return errors;
    };
    ;

    // Handle input change
    const handleChange = (e) => {
        setEnterDepartmentName(e.target.value);
    };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const errors = validate(enterDepartmentName);
    //     setFormErrors(errors);

    //     if (Object.keys(errors).length === 0) {
    //       localStorage.setItem("EnterDepartmentName", enterDepartmentName);
    //       console.log("Saved to localStorage:", enterDepartmentName);
    //       onClose(); // Close popup after save
    //     }
    //   };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(enterDepartmentName);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            onSave(enterDepartmentName); // pass data to parent
            setEnterDepartmentName("");  // clear input
            onClose(); //  close popup
        }
    };

    // localStorage.setItem("EmailAddress", EnterDepartmentName);
    // localStorage.setItem("Password", formValues.Password);
    // localStorage.setItem("DateOfBirth", formValues.DateOfBirth);
    // localStorage.setItem("About", formValues.About);
    // toast.success("User registered successfully!");
    // navigate("/login");

    return (
        <>
            <div className="fixed inset-0 bg-white/40 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded shadow-md w-80">
                    <input type="text" placeholder="Enter Department Name" value={enterDepartmentName} onChange={handleChange} className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    {formErrors.name && (<p className="text-red-500 text-sm mb-2">{formErrors.name}</p>)}
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={handleSubmit} > Save </button>
                    <button className="w-full mt-2 bg-gray-300 text-black py-2 rounded hover:bg-gray-400" onClick={onClose} > Cancel </button>
                </div>
            </div>
        </>
    )
}
export default DepartmentItem;