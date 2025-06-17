
import React, { useState } from 'react';

const EmployeeManagement = () => {
    const [step, setStep] = useState(1); // current step
    const [errors, setErrors] = useState({}); //for validation
    const [formData, setFormData] = useState({

        employeeFirstName: '',
        employeeMiddleName: '',
        employeeLastName: '',
        employeeMainMobileNumber: '',
        employeeEmergencyMobileNumber: '',
        employeeEmail: '',
        employeeAddress: '',
        employeeDOB: '',
        employeeGender: '',
        employeeMaritalStatus: '',


        employeeID: '',
        jobTitle: '',
        department: '',
        reportingHead: '',
        assistantReportingHead: '',
        employeeType: '',
        dateOfJoining: '',
        dateOfConfirmation: '',

        bankName: '',
        accountNumber: '',
        ifscCode: '',
        accountHolderName: '',
    });

    // const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        const validationErrors = validateStep(step, formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setStep((prev) => prev + 1);
    };
   const handleSubmit = () => {
    const validationErrors = validateStep(step, formData);
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }
    console.log("Final Submit:", formData);
    // You can reset the form or send data to API here
};
    const validateStep = (step, values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (step === 1) {
            if (!values.employeeFirstName.trim()) errors.employeeFirstName = "First name is required";
            if (!values.employeeMiddleName.trim()) errors.employeeMiddleName = "Middle name is required";
            if (!values.employeeLastName.trim()) errors.employeeLastName = "Last name is required";

            if (!values.employeeMainMobileNumber) {
                errors.employeeMainMobileNumber = "Main number is required";
            } else if (values.employeeMainMobileNumber.length !== 10) {
                errors.employeeMainMobileNumber = "Main number must be 10 digits";
            }

            if (!values.employeeEmergencyMobileNumber) {
                errors.employeeEmergencyMobileNumber = "Emergency number is required";
            } else if (values.employeeEmergencyMobileNumber.length !== 10) {
                errors.employeeEmergencyMobileNumber = "Emergency number must be 10 digits";
            }

            if (!values.employeeEmail.trim()) {
                errors.employeeEmail = "Email is required";
            } else if (!emailRegex.test(values.employeeEmail)) {
                errors.employeeEmail = "Invalid email format";
            }

            if (!values.employeeAddress.trim()) errors.employeeAddress = "Address is required";
            if (!values.employeeDOB) errors.employeeDOB = "Date of birth is required";
            if (!values.employeeGender) errors.employeeGender = "Gender is required";
            if (!values.employeeMaritalStatus) errors.employeeMaritalStatus = "Marital status is required";
        }

        if (step === 2) {
            if (!values.employeeID.trim()) errors.employeeID = "Employee ID is required";
            if (!values.jobTitle.trim()) errors.jobTitle = "Job Title is required";
            if (!values.department.trim()) errors.department = "Department is required";
            if (!values.reportingHead.trim()) errors.reportingHead = "Reporting Head is required";
            if (!values.assistantReportingHead.trim()) errors.assistantReportingHead = "Assistant Reporting Head is required";
            if (!values.employeeType.trim()) errors.employeeType = "Employee Type is required";
            if (!values.dateOfJoining.trim()) errors.dateOfJoining = "Date of Joining is required";
            if (!values.dateOfConfirmation.trim()) errors.dateOfConfirmation = "Date of Confirmation is required";
        }

        if (step === 3) {
            if (!values.bankName.trim()) errors.bankName = "Bank Name is required";
            if (!values.accountNumber.trim()) errors.accountNumber = "Account Number is required";
            if (!values.ifscCode.trim()) errors.ifscCode = "IFSC Code is required";
            if (!values.accountHolderName.trim()) errors.accountHolderName = "Account Holder Name is required";
        }

        return errors;
    };


    return (
        <div>


            <div className="max-w-xl mx-auto p-6 bg-white  rounded-md">
                <div className='text-center mt-1 mb-2'>
                    <h1 className="text-2xl font-bold">Employee Information Management</h1>
                </div>


                {/* Step 1: Personal Details */}
                {step === 1 && (
                    <div>
                        <h1 className='text-xl font-bold mb-6 text-center'>Personal Details</h1>
                        <input type="text" name="employeeFirstName" placeholder="Employee First Name" value={formData.employeeFirstName} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.employeeFirstName && <p className="text-red-500 text-sm mb-2">{errors.employeeFirstName}</p>}
                        <input type="text" name="employeeMiddleName" placeholder="Employee Middle Name" value={formData.employeeMiddleName} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.employeeMiddleName && <p className="text-red-500 text-sm mb-2">{errors.employeeMiddleName}</p>}
                        <input type="text" name="employeeLastName" placeholder="Employee Last Name" value={formData.employeeLastName} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.employeeLastName && <p className="text-red-500 text-sm mb-2">{errors.employeeLastName}</p>}
                        <input type="number" name="employeeMainMobileNumber" placeholder="Employee Main Mobile Number" value={formData.employeeMainMobileNumber} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.employeeMainMobileNumber && <p className="text-red-500 text-sm mb-2">{errors.employeeMainMobileNumber}</p>}
                        <input type="number" name="employeeEmergencyMobileNumber" placeholder="Employee Emergency Mobile Number" value={formData.employeeEmergencyMobileNumber} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.employeeEmergencyMobileNumber && <p className="text-red-500 text-sm mb-2">{errors.employeeEmergencyMobileNumber}</p>}
                        <input type="email" name="employeeEmail" placeholder="Employee Email" value={formData.employeeEmail} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.employeeEmail && <p className="text-red-500 text-sm mb-2">{errors.employeeEmail}</p>}
                        <input type="text" name="employeeAddress" placeholder="Employeee Address" value={formData.employeeAddress} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.employeeAddress && <p className="text-red-500 text-sm mb-2">{errors.employeeAddress}</p>}
                        <input type="date" name="employeeDOB" placeholder="Employee DOB" value={formData.employeeDOB} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.employeeDOB && <p className="text-red-500 text-sm mb-2">{errors.employeeDOB}</p>}
                        <select name="employeeGender" value={formData.employeeGender} onChange={handleChange} className="w-full p-2 border rounded mb-4">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.employeeGender && <p className="text-red-500 text-sm mb-2">{errors.employeeGender}</p>}
                        <select name="employeeMaritalStatus" value={formData.employeeMaritalStatus} onChange={handleChange} className="w-full p-2 border rounded mb-4">
                            <option value="">Select Marital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                        </select>
                        {errors.employeeMaritalStatus && <p className="text-red-500 text-sm mb-2">{errors.employeeMaritalStatus}</p>}
                        <div className="flex justify-end">
                            <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded"> Next</button>
                        </div>
                    </div>
                )}

                {/* Step 2: Employment Details */}
                {step === 2 && (
                    <div>
                        <h1 className='text-xl font-bold mb-6 text-center'>Employment Details</h1>
                        <input type="text" name="employeeID" placeholder="Employee ID" value={formData.employeeID} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.employeeID && <p className="text-red-500 text-sm mb-2">{errors.employeeID}</p>}
                        <input type="text" name="jobTitle" placeholder="job Title" value={formData.jobTitle} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.jobTitle && <p className="text-red-500 text-sm mb-2">{errors.jobTitle}</p>}
                        <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.department && <p className="text-red-500 text-sm mb-2">{errors.department}</p>}
                        <input type="text" name="reportingHead" placeholder="Reporting Head" value={formData.reportingHead} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.reportingHead && <p className="text-red-500 text-sm mb-2">{errors.reportingHead}</p>}
                        <input type="text" name="assistantReportingHead" placeholder="Assistant Reporting Head" value={formData.assistantReportingHead} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.assistantReportingHead && <p className="text-red-500 text-sm mb-2">{errors.assistantReportingHead}</p>}
                        <input type="text" name="employeeType" placeholder="Employee Type" value={formData.employeeType} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.employeeType && <p className="text-red-500 text-sm mb-2">{errors.employeeType}</p>}
                        <input type="text" name="dateOfJoining" placeholder="Date Of Joining" value={formData.dateOfJoining} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.dateOfJoining && <p className="text-red-500 text-sm mb-2">{errors.dateOfJoining}</p>}
                        <input type="text" name="dateOfConfirmation" placeholder="Date Of Confirmation" value={formData.dateOfConfirmation} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.dateOfConfirmation && <p className="text-red-500 text-sm mb-2">{errors.dateOfConfirmation}</p>}
                        <div className="flex justify-between">
                            <button onClick={handleBack} className="bg-gray-300 text-black px-4 py-2 rounded"> Back</button>
                            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
                        </div>
                    </div>
                )}

                {/* Step 3: Employment Account Details */}
                {step === 3 && (
                    <div>
                        <h1 className='text-xl font-bold mb-6 text-center'>Employment Account Details</h1>
                        <input type="text" name="bankName" placeholder="Bank Name" value={formData.bankName} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.bankName && <p className="text-red-500 text-sm mb-2">{errors.bankName}</p>}
                        <input type="text" name="accountNumber" placeholder="Account Number" value={formData.accountNumber} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.accountNumber && <p className="text-red-500 text-sm mb-2">{errors.accountNumber}</p>}
                        <input type="text" name="ifscCode" placeholder="IFSC Code" value={formData.ifscCode} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.ifscCode && <p className="text-red-500 text-sm mb-2">{errors.ifscCode}</p>}
                        <input type="text" name="accountHolderName" placeholder="Account Holder Name" value={formData.accountHolderName} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
                        {errors.accountHolderName && <p className="text-red-500 text-sm mb-2">{errors.accountHolderName}</p>}
                        <div className="flex justify-between">
                            <button onClick={handleBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
                            <button onClick={() => console.log('Final Submit:', formData)} className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};



export default EmployeeManagement;