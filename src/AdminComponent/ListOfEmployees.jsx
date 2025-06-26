import React, { useEffect, useState } from 'react'

const ListOfEmployee = () => {
    // const [employeeList, setEmployeeList] = useState([]);
    const [employeeList, setEmployeeList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedData, setEditedData] = useState({});
    // for shorting
    const [sortEmploymentType, setSortEmploymentType] = useState("");
    const [sortStatus, setSortStatus] = useState("");

    // useEffect(() => {
    //     const stored = JSON.parse(localStorage.getItem("employees")) || [];
    //   console.log(JSON.parse(localStorage.getItem("employees")));
    //     setEmployeeList(stored);
    // }, []);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("employees")) || [];
        console.log("Loaded Employees:", stored); // Check employmentType values
        setEmployeeList(stored);
    }, []);
    const handleDelete = (indexToDelete) => {
        const updatedList = employeeList.filter((_, index) => index !== indexToDelete);
        setEmployeeList(updatedList);
        localStorage.setItem("employees", JSON.stringify(updatedList));
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedData({ ...employeeList[index] });
    };

    const handleCancel = () => {
        setEditIndex(null);
        setEditedData({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        const updatedList = [...employeeList];
        updatedList[editIndex] = editedData;
        setEmployeeList(updatedList);
        localStorage.setItem("employees", JSON.stringify(updatedList));
        setEditIndex(null);
        setEditedData({});
    };

    // for shorting
    const filteredEmployees = employeeList.filter((emp) => {
        const matchesType =
            sortEmploymentType === "" || emp.employmentType?.trim().toLowerCase() === sortEmploymentType.trim().toLowerCase();
        const matchesStatus =
            sortStatus === "" ||
            (sortStatus === "Active" && emp.isActive) ||
            (sortStatus === "Inactive" && !emp.isActive);
        console.log(`Checking: ${emp.fullName}, Type: ${emp.employmentType}, MatchType: ${matchesType}`);
        return matchesType && matchesStatus;
    });



    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded">

            <h1 className="text-2xl font-bold mb-4 text-center">List Of Employees</h1>
            <div className="flex flex-col sm:flex-row justify-between  mb-4">
                <select className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto mb-2 sm:mb-0" onChange={(e) => setSortEmploymentType(e.target.value)} >
                    <option value="">Sort by Employment Type</option>
                    <option value="Internship">Internship</option>
                    <option value="Full Time">Full Time</option>
                </select>

                <select className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto" onChange={(e) => setSortStatus(e.target.value)} >
                    <option value="">Sort by Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
            <div className="overflow-x-auto">

                <table className="min-w-full border text-sm table-fixed">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left">
                            <th className="p-2 border  w-16">S.No</th>
                            <th className="p-2 border  w-32">Employment</th>
                            <th className="p-2 border  w-36">Emp/Intern ID</th>
                            <th className="p-2 border w-48">Name</th>
                            <th className="p-2 border w-48">Designation</th>
                            <th className="p-2 border w-40">Date of Joining</th>
                            <th className="p-2 border w-32">Status</th>
                            <th className="p-2 border w-48">Action</th>




                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredEmployees.map((emp, index) => (
                            <tr key={index}>
                                <td className="p-2 border">{index + 1}</td>
                                <td className="p-2 border text-center">{emp.employmentType}</td>
                                <td className="p-2 border">{emp.employeeID}</td>
                                <td className="p-2 border">{editIndex === index ? (
                                    <input type="text" name="fullName" value={editedData.fullName} onChange={handleChange} className="border px-2 py-1 rounded w-full" />
                                ) : (
                                    emp.fullName
                                )}
                                </td>
                                <td className="p-2 border"> {editIndex === index ? (
                                    <input type="text" name="selectDesignation" value={editedData.selectDesignation} onChange={handleChange} className="border px-2 py-1 rounded w-full" />
                                ) : (
                                    emp.selectDesignation
                                )}
                                </td>
                                <td className="p-2 border">{editIndex === index ? (
                                    <input type="date" name="dateofjoining" value={editedData.dateofjoining} onChange={handleChange} className="border px-2 py-1 rounded w-full" />
                                ) : (
                                    emp.dateofjoining
                                )}
                                </td>

                                <td className="p-2 border">{editIndex === index ? (
                                    <select name="isActive" value={editedData.isActive ? "true" : "false"} onChange={(e) => setEditedData((prev) => ({ ...prev, isActive: e.target.value === "true", }))} className="border px-2 py-1 rounded w-full" >
                                        <option value="true">Active</option>
                                        <option value="false">Inactive</option>
                                    </select>
                                ) : emp.isActive ? (
                                    "Active"
                                ) : (
                                    "Inactive"
                                )}
                                </td>
                                <td className="p-2 border">{editIndex === index ? (
                                    <div className="flex gap-2">
                                        <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded">Save</button>
                                        <button onClick={handleCancel} className="bg-gray-400 text-white px-3 py-1 rounded"> Cancel</button>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(index)}
                                            className="bg-blue-400 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="bg-red-400 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
};
export default ListOfEmployee;