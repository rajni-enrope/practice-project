import React, { useState, useRef, useEffect } from "react";



const EmployeeDetails = () => {
    const [step, setStep] = useState(1); // Controls current step of form out of six
    const [errors, setErrors] = useState({}); //for validation
    const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const [formData, setformData] = useState({
        employmentType: '',
        employeeID: "AB10023",
        employmentDetails: "",
        fullName: '',
        dateofjoining: '',
        period: '',
        dateofBirth: '',
        uplordimage: "",
        selectDepartment: '',
        selectDesignation: '',

        //2
        bloodGroup: '',
        gender: '',
        fatherName: '',
        motherName: '',
        officialemail: '',
        personalemail: '',
        alternativePersonalEmail: '',
        contactNucmber: '',
        alternativeContactNumber: '',
        emergencyNumber: '',
        adharNumber: '',
        panNumber: '',
        maritalStatus: '',
        currentAddress: '',
        selectReportinghead: '',

        //3
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        accountHolderName: '',

        //4
        previousemployer: "",
        previousdesignation: "",
        previousAnnualCTC: "",
        previousmonthly: "",
        UANNumber: "",
        ESICNumber: "",


        //6
        password: "",
        confirmpassword: "",
        isActive: false,


    })
    console.log(formData);

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
        if (file && file.type.startsWith("image/")) {
            const base64 = await getBase64(file);
            setImagePreview(base64);      //  Show preview
            setImageFile(file);           //  Store actual file
            setformData((prev) => ({      //  FIX: Also update formData.uplordimage so validation can pass
                ...prev,
                uplordimage: base64,

            }));
            console.log("Setting uplordimage to:", base64);

        } else {
            alert("Please upload a valid image file.");
        }
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    // to get department from local storage 
    const [departments, setDepartments] = useState([]);// use arry [] for list array
    const [selectedDepartment, setSelectedDepartment] = useState("");

    // Load departments from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("departments");
        if (stored) {
            setDepartments(JSON.parse(stored)); // ✅ set array
        }
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateStep = (step, data) => {
        const errors = {};

        if (step === 1) {
            if (step === 1) {
                if (!data.fullName) errors.fullName = "Full Name is required";
                if (!data.employmentType) errors.employmentType = "Select Employment Type";
                if (!data.employmentDetails) errors.employmentDetails = "Select Employment Type";
                if (!data.dateofjoining) errors.dateofjoining = "Date of Joining is required";
                if (!data.period) errors.period = "Select Period";
                if (!data.selectDepartment) errors.selectDepartment = "Select Department";
                if (!data.selectDesignation) errors.selectDesignation = "Select Designation";
                if (!data.selectReportinghead) errors.selectReportinghead = "Select Reporting Head";
                if (!data.uplordimage) errors.uplordimage = "Please Uplord Image";
            }

        }

        if (step === 2) {
            if (!data.dateofBirth) errors.dateofBirth = "Date of Birth is required";
            if (!data.gender) errors.gender = "Gender is required";
            if (!data.bloodGroup) errors.bloodGroup = "Blood Group is required";
            if (!data.fatherName) errors.fatherName = "Father’s Name is required";
            if (!data.motherName) errors.motherName = "Mother’s Name is required";
            if (!data.officialemail) errors.officialemail = "Official Email is required";
            if (!data.personalemail) errors.personalemail = "Personal Email is required";
            if (!data.alternativePersonalEmail) errors.alternativePersonalEmail = "Alternative Personal Email is required";
            if (!data.contactNucmber) errors.contactNucmber = "Contact Number is required";
            if (!data.alternativeContactNumber) errors.alternativeContactNumber = "Alternative Contact Number is required";
            if (!data.emergencyNumber) errors.emergencyNumber = "Emergency Number is required";
            if (!data.adharNumber) errors.adharNumber = "Adhar Number is required";
            if (!data.panNumber) errors.panNumber = "Pan Number is required";
            if (!data.maritalStatus) errors.maritalStatus = "Marital Status is required";
            if (!data.currentAddress) errors.currentAddress = "Current Address is required";
        }

        if (step === 3) {
            if (!data.bankName) errors.bankName = "Bank Name is required";
            if (!data.accountNumber) errors.accountNumber = "Account Number is required";
            if (!data.ifscCode) errors.ifscCode = "IFSC Code is required";
            if (!data.accountHolderName) errors.accountHolderName = "Account Holder Name is required";
        }
        if (step === 4) {
            if (!data.previousemployer) errors.previousemployer = " Enter previous employer";
            if (!data.previousdesignation) errors.previousdesignation = "Enter previous  designation";
            if (!data.previousAnnualCTC) errors.previousAnnualCTC = "Enter previous Annual CTC";
            if (!data.previousmonthly) errors.previousmonthly = "Enter previous monthly";
            if (!data.UANNumber) errors.UANNumber = "UAN Number";
            if (!data.ESICNumber) errors.ESICNumber = "ESIC Number";

        }
        if (step === 6) {
            if (!data.password) errors.password = "Password is required";
            if (!data.confirmpassword) errors.confirmpassword = "Confirm Password is required";
            if (data.password !== data.confirmpassword)
                errors.confirmpassword = "Passwords do not match";
        }

        return errors;
    };

    const handleBack = () => {
        if (step === 5 && formData.employmentDetails !== "employee") {
            setStep(3); // Skip step 4 in reverse
        } else {
            setStep((prev) => Math.max(prev - 1, 1));
        }
    };

    const handleNext = () => {
        const validationErrors = validateStep(step, formData);
        console.log("Step:", step);
        console.log("Form Data:", formData);

        if (Object.keys(validationErrors).length > 0) {
            console.log("Validation Errors:", validationErrors);
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        if (step === 3 && formData.employmentDetails !== "employee") {
            setStep(5); // Skip Step 4 if not experienced
        } else {
            setStep((prev) => Math.min(prev + 1, 6)); // Normal next
        }
    };

    // form 5
    const [documents, setDocuments] = useState([]); //an array to store all uploaded documents.
    const [docName, setDocName] = useState(""); // stores the current input for the document name.
    const [docFile, setDocFile] = useState(null); //stores the selected file (PDF) from file input.
    const [editIndex, setEditIndex] = useState(null); // used to track which document is being edited.

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "application/pdf") {
            setDocFile(file);
        } else {
            alert("Only PDF files are allowed.");
            e.target.value = ""; // reset file input
        }
    };



    const handleAddDocument = (e) => {
        e.preventDefault(); // Prevent form refresh
        if (!docName || !docFile) return alert("Please enter a name and select a PDF file.");
        // if (!docName) return alert("Please enter a name and select a PDF file.");
        if (docFile.type !== "application/pdf") return alert("Only PDF files are allowed.");
        if (documents.length >= 20) return alert("Maximum 20 files allowed.");
        const newDoc = { name: docName, file: docFile };
        if (editIndex !== null) {
            const updatedDocs = [...documents];
            updatedDocs[editIndex] = newDoc;
            setDocuments(updatedDocs);
            setEditIndex(null);
        } else {
            setDocuments([...documents, newDoc]);
        }

        setDocName("");
        setDocFile(null);
    };
    const handleEdit = (index) => {
        setDocName(documents[index].name);
        setDocFile(documents[index].file);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updated = [...documents];
        updated.splice(index, 1);
        setDocuments(updated);
    };


    return (
        <>
            <div className="max-w-3xl mx-auto p-6 bg-white rounded ">
                <h2 className="text-xl font-bold mb-4"> Step {step} of 6</h2>

                {/* Step 1: Employment Details */}
                {step === 1 && (
                    <div>
                        <h1 className='text-xl font-bold mb-6 text-center'>Add Employee</h1>
                        <label className="block text-sm font-medium text-gray-700 mb-2 mt-1">Employment Type</label>
                        <select name='employmentType' value={formData.employmentType} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mt-2 mb-2">
                            <option value="">Select Type</option>
                            <option value="intern">Internship</option>
                            <option value="employee">Full Time Employee</option>
                        </select>
                        {errors.employmentType && <p className="text-red-500 text-sm mb-2">{errors.employmentType}</p>}
                        <input type="text" name='employeeID' value={formData.employeeID} readOnly className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-700 mt-2 mb-1" />
                        <p className="text-xs text-gray-500 mb-4">This will be used as the login ID</p>
                        <input type="text" name="fullName" placeholder="Enter Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.fullName && <p className="text-red-500 text-sm mb-2">{errors.fullName}</p>}

                        <div className="flex flex-col gap-1">
                            <label className="text-xs md:text-sm font-bold text-gray-700 mt-4">Upload Image</label><br />
                            <input type="file" name="uplordimage" id="img" accept="image/*" onChange={handleImageChange} ref={fileInputRef} style={{ display: "none" }} />
                            <img src={imagePreview} alt="Profile" id="profilePic" className="w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:w-60  object-cover rounded-full mx-auto  border-gray-300 " /><br />
                            {errors.uplordimage && (<p className="text-red-500 text-sm text-center">{errors.uplordimage}</p>)}
                            <button type="button" onClick={handleButtonClick} className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200 mx-10 mb-4">Select Profile Pic</button>
                        </div>

                        <label className="block text-sm font-medium text-gray-700 mb-2 mt-1">Employment Type</label>
                        <select name='employmentDetails' value={formData.employmentDetails} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-4">
                            <option value="">Select Type</option>
                            <option value="intern">Fresher</option>
                            <option value="employee">Experienced</option>
                        </select>
                        {errors.employmentDetails && <p className="text-red-500 text-sm mb-2">{errors.employmentDetails}</p>}
                        <input type="date" name="dateofjoining" placeholder="Enter Date Of Joining" value={formData.dateofjoining} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.dateofjoining && <p className="text-red-500 text-sm mb-2">{errors.dateofjoining}</p>}

                        <label className="block text-sm font-medium text-gray-700 mt-2 mb-2">Period </label>
                        <select name='period' onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                            <option value="Probation">Internship </option>
                            <option value="Confirmation">Full Time Employee </option>
                        </select>
                        {errors.period && <p className="text-red-500 text-sm mb-2">{errors.period}</p>}

                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Department </label>
                        <select name="selectDepartment" value={formData.selectDepartment} onChange={(e) => setformData({ ...formData, selectDepartment: e.target.value })} className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                            <option value="">Select Department</option> {departments.map((dept, idx) => (<option key={idx} value={dept}>{dept}</option>))}</select>
                        {errors.selectDepartment && <p className="text-red-500 text-sm mb-2">{errors.selectDepartment}</p>}

                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Designation</label>
                        <select name="selectDesignation" value={formData.selectDesignation} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mb-4" >
                            <option value="">Select Designation</option>
                            <option value="Probation">Probation</option>
                            <option value="Senior">Senior</option>
                            <option value="Manager">Manager</option>
                            {/* Add other options as needed */}
                        </select>
                        {errors.selectDesignation && <p className="text-red-500 text-sm mb-2">{errors.selectDesignation}</p>}

                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Reporting head </label>
                        <select name='selectReportinghead' onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                            <option value="Probation">Work </option>
                            <option value="Probation">hr </option>
                            <option value="Probation">Work </option>
                            <option value="Probation">Work </option>
                        </select>
                        {errors.selectReportinghead && <p className="text-red-500 text-sm mb-2">{errors.selectReportinghead}</p>}

                        <div className="flex justify-end">

                        </div>
                        <div className="flex justify-between">
                            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
                        </div>
                    </div>
                )}

                {/* Step 2: Personal Details */}
                {step === 2 && (
                    <div>
                        <h1 className='text-xl font-bold mb-6 text-center'>Personal Details</h1>
                        <input type="date" name="dateofBirth" placeholder="Enter Date of Birth" value={formData.dateofBirth} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.dateofBirth && <p className="text-red-500 text-sm mb-2">{errors.dateofBirth}</p>}
                        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded mb-4">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm mb-2">{errors.gender}</p>}
                        <input type="text" name="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.bloodGroup && <p className="text-red-500 text-sm mb-2">{errors.bloodGroup}</p>}
                        <input type="text" name="fatherName" placeholder="Father’s Name" value={formData.fatherName} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.fatherName && <p className="text-red-500 text-sm mb-2">{errors.fatherName}</p>}
                        <input type="text" name="motherName" placeholder=" Mother’s Name" value={formData.motherName} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.motherName && <p className="text-red-500 text-sm mb-2">{errors.motherName}</p>}
                        <input type="email" name="officialemail" placeholder="Official email" value={formData.officialemail} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.officialemail && <p className="text-red-500 text-sm mb-2">{errors.officialemail}</p>}
                        <input type="email" name="personalemail" placeholder=" Personal email" value={formData.personalemail} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.personalemail && <p className="text-red-500 text-sm mb-2">{errors.personalemail}</p>}
                        <input type="text" name="alternativePersonalEmail" placeholder="Alternative Personal Email" value={formData.alternativePersonalEmail} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.alternativePersonalEmail && <p className="text-red-500 text-sm mb-2">{errors.alternativePersonalEmail}</p>}
                        <input type="number" name="contactNucmber" placeholder="Contact Number" value={formData.contactNucmber} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.contactNucmber && <p className="text-red-500 text-sm mb-2">{errors.contactNucmber}</p>}
                        <input type="number" name="alternativeContactNumber" placeholder="Alternative Contact Number" value={formData.alternativeContactNumber} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.alternativeContactNumber && <p className="text-red-500 text-sm mb-2">{errors.alternativeContactNumber}</p>}
                        <input type="number" name="emergencyNumber" placeholder="Emergency Number" value={formData.emergencyNumber} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.emergencyNumber && <p className="text-red-500 text-sm mb-2">{errors.emergencyNumber}</p>}
                        <input type="text" name="adharNumber" placeholder="Adhar Number " value={formData.adharNumber} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.adharNumber && <p className="text-red-500 text-sm mb-2">{errors.adharNumber}</p>}
                        <input type="text" name="panNumber" placeholder="Pan Number " value={formData.panNumber} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.panNumber && <p className="text-red-500 text-sm mb-2">{errors.panNumber}</p>}
                        <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="w-full p-2 border rounded mb-4">
                            <option value="">Select Marital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                        </select>
                        {errors.maritalStatus && <p className="text-red-500 text-sm mb-2">{errors.maritalStatus}</p>}
                        <input type="text" name="currentAddress" placeholder=" Current Address " value={formData.currentAddress} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.currentAddress && <p className="text-red-500 text-sm mb-2">{errors.currentAddress}</p>}
                        <div className="flex justify-between">
                            <button onClick={handleBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
                            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
                        </div>
                    </div>
                )}

                {/* Step 3: Bank Details */}
                {step === 3 && (
                    <div>
                        <h1 className='text-xl font-bold mb-6 text-center'>Employment Account Details</h1>
                        <input type="text" name="bankName" placeholder="Bank Name" value={formData.bankName} onChange={handleChange} className="w-full p-2 border rounded mb-1" />
                        {errors.bankName && (<p className="text-red-500 text-sm mb-3">{errors.bankName}</p>)}
                        <input type="text" name="accountNumber" placeholder="Account Number" value={formData.accountNumber} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.accountNumber && <p className="text-red-500 text-sm mb-2">{errors.accountNumber}</p>}
                        <input type="text" name="ifscCode" placeholder="IFSC Code" value={formData.ifscCode} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.ifscCode && <p className="text-red-500 text-sm mb-2">{errors.ifscCode}</p>}
                        <input type="text" name="accountHolderName" placeholder="Account Holder Name" value={formData.accountHolderName} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.accountHolderName && <p className="text-red-500 text-sm mb-2">{errors.accountHolderName}</p>}
                        <div className="flex justify-between">
                            <button onClick={handleBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
                            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
                        </div>
                    </div>
                )}

                {/* Step 4: Previous Employment */}
                {step === 4 && (
                    <div>
                        <h1 className='text-xl font-bold mb-6 text-center'> Previous Employment  Details</h1>
                        <input type="text" name="previousemployer" placeholder="Enter previous employer" value={formData.previousemployer} onChange={handleChange} className="w-full p-2 border rounded mb-1" />
                        {errors.previousemployer && (<p className="text-red-500 text-sm mb-3">{errors.previousemployer}</p>)}
                        <input type="text" name="previousdesignation" placeholder="Enter previous designation" value={formData.previousdesignation} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.previousdesignation && <p className="text-red-500 text-sm mb-2">{errors.previousdesignation}</p>}
                        <input type="text" name="previousAnnualCTC" placeholder="Enter previous Annual CTC" value={formData.previousAnnualCTC} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.previousAnnualCTC && <p className="text-red-500 text-sm mb-2">{errors.previousAnnualCTC}</p>}
                        <input type="text" name="previousmonthly" placeholder="Enter previous monthly" value={formData.previousmonthly} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.previousmonthly && <p className="text-red-500 text-sm mb-2">{errors.previousmonthly}</p>}
                        <input type="text" name="UANNumber" placeholder="Enter UAN Number" value={formData.UANNumber} onChange={handleChange} className="w-full p-2 border rounded mb-1" />
                        {errors.UANNumber && (<p className="text-red-500 text-sm mb-3">{errors.UANNumber}</p>)}
                        <input type="text" name="ESICNumber" placeholder="Enter ESIC Number" value={formData.ESICNumber} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.ESICNumber && <p className="text-red-500 text-sm mb-2">{errors.ESICNumber}</p>}
                        <div className="flex justify-between">
                            <button onClick={handleBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
                            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
                        </div>
                    </div>
                )}

                {/* Step 5: Upload Documents */}
                {step === 5 && (
                    <div className="max-w-2xl mx-auto p-4 bg-white rounded  space-y-4">
                        <h1 className='text-xl font-bold mb-6 text-center'> List of Documents</h1>

                        <form onSubmit={handleAddDocument} className="space-y-3">
                            <input type="text" placeholder="Enter Document Name" value={docName} className="w-full border px-3 py-2 rounded" onChange={(e) => setDocName(e.target.value)} />
                            <input type="file" accept=".pdf" onChange={(e) => setDocFile(e.target.files[0])} className="w-full  border px-3 py-2 rounded" />
                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" >
                                {editIndex !== null ? "Update Document" : "Add Document"}
                            </button>
                        </form>
                        <ul className="space-y-2"> {documents.map((doc, index) => (
                            <li key={index} className="flex justify-between items-center border p-2 rounded">
                                <div>
                                    <p className="font-medium">{doc.name}</p>
                                    <p className="text-sm text-gray-500">{doc.file.name}</p>
                                </div>
                                <div className="space-x-2">
                                    <button className="text-blue-600 font-medium" onClick={() => handleEdit(index)}> Edit </button>
                                    <button className="text-red-600 font-medium" onClick={() => handleDelete(index)}  >  Delete </button>
                                </div>
                            </li>
                        ))}
                        </ul>

                        <p className="text-sm text-gray-500">* Only PDF files allowed. Max: 20 documents.</p>
                        <div className="flex justify-between">
                            <button onClick={handleBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
                            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
                        </div>
                    </div>
                )}

                {/* Step 6: Employee Account / Login Info */}
                {step === 6 && (
                    <div>
                        <h1 className='text-xl font-bold mb-6 text-center'> Previous Employment  Details</h1>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
                        <input type="password" name="password" value={formData.password || ""} onChange={handleChange} placeholder="Enter Password" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />
                        {errors.previousemployer && (<p className="text-red-500 text-sm mb-3">{errors.previousemployer}</p>)}
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input type="password" name="confirmpassword" value={formData.confirmpassword || ""} onChange={handleChange} placeholder="Confirm Password" className="w-full border border-gray-300 rounded px-3 py-2 mb-2" />
                        {formData.password !== formData.confirmpassword && formData.confirmpassword && (<p className="text-red-500 text-sm mb-4">Passwords do not match</p>)}
                        {/* Active / Inactive Toggle */}
                        <div className="flex items-center justify-between mt-4 mb-6">
                            <span className="text-sm font-medium text-gray-700">Employee Status:</span>
                            <label className="flex items-center cursor-pointer">
                                <div className="relative">
                                    <input type="checkbox" name="isActive" checked={formData.isActive || false} onChange={(e) => setformData((prev) => ({ ...prev, isActive: e.target.checked, }))} className="sr-only" />
                                    <div className="w-11 h-6 bg-gray-300 rounded-full shadow-inner peer-checked:bg-green-500"></div>
                                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-full"></div>
                                </div>
                                <span className="ml-3 text-sm text-gray-600">
                                    {formData.isActive ? "Active" : "Inactive"}
                                </span>
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <button onClick={handleBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
                            <button onClick={() => console.log('Final Submit:', formData)} className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}




            </div>


        </>
    )
};
export default EmployeeDetails;