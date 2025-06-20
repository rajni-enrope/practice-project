import { useState, useEffect } from "react";

import DepartmentItem from "./Adddepartment";


const DepartmentSetting = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);  // which li is being edited
    const [editedName, setEditedName] = useState("");        // store the edited name temporarily


    // Load from localStorage on first render
    useEffect(() => {
        const storedDepartments = localStorage.getItem("departments");
        if (storedDepartments) {
            setDepartments(JSON.parse(storedDepartments));
        }
    }, []);



    // Prevent background scroll when popup open
    useEffect(() => {
        if (popupOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [popupOpen]);


    // Save new department and update localStorage
    const handleSave = (newDeptName) => {
        const newList = [...departments];

        if (editingIndex !== null) {
            // Update the department at the editing index
            newList[editingIndex] = newDeptName;
            setEditingIndex(null); // Reset edit mode
            setEditedName("");     // Clear the input
        } else {
            // Add new department
            newList.push(newDeptName);
        }

        setDepartments(newList);
        localStorage.setItem("departments", JSON.stringify(newList));
        setPopupOpen(false); // Close popup only if adding
    };
    const handleDelete = (index) => {
        const newList = departments.filter((_, i) => i !== index);
        setDepartments(newList);
        localStorage.setItem("departments", JSON.stringify(newList));
    };

    const handleSaveEdit = (index) => {
        if (!editedName.trim()) return;

        const updated = [...departments];
        updated[index] = editedName;

        setDepartments(updated);
        localStorage.setItem("departments", JSON.stringify(updated));

        // Reset states
        setEditingIndex(null);
        setEditedName("");
    };


    return (
        <>
            <div className="  items-center mt-10 p-4 bg-white rounded  justify-end  min-h-screen">
                <div className=" w-full md:w-1/2 mx-auto bg-blue-200r">
                    <h1 className="text-xl font-bold  text-center ">Department List</h1>
                </div>

                <div className="flex justify-center">
                    <ul className="text-gray-700 list-none space-y-2 w-full md:w-1/2">
                        {departments.length === 0 && (
                            <li className="text-center text-gray-500">No departments added</li>
                        )}

                        {departments.map((dept, index) => (
                            <li key={index} className="flex justify-between items-center border p-2 rounded">
                                {/* If we are editing this item, show input */}
                                {editingIndex === index ? (
                                    <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} className="border px-2 py-1 rounded w-full" />)
                                    : (<span>{dept}</span>)}
                                <div className="flex gap-2 ml-4">
                                    {editingIndex === index ? (
                                        <>
                                            <button onClick={() => handleSaveEdit(index)} className="bg-green-500 px-2 py-1 rounded text-white" > Save </button>
                                            <button onClick={() => setEditingIndex(null)} className="bg-gray-300 px-2 py-1 rounded" > Cancel </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="bg-blue-300 px-2 py-1 rounded" onClick={() => {
                                                setEditingIndex(index); setEditedName(dept); // fill input with current name
                                            }}
                                            >Edit </button>
                                            <button className="bg-red-400 px-2 py-1 rounded" onClick={() => handleDelete(index)} > Delete  </button>
                                        </>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className=" flex justify-center ">
                    <button onClick={() => setPopupOpen(true)} className="bg-green-600 mt-10 text-white px-4 py-2 rounded hover:bg-green-700"> Add Department</button>
                    <DepartmentItem isOpen={popupOpen} onClose={() => setPopupOpen(false)} onSave={handleSave} />

                </div>
            </div>
        </>
    )
};
export default DepartmentSetting;