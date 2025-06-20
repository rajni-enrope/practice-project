import { useEffect, useState } from "react";
const DesignationSetting = () => {
    const [departments, setdepartments] = useState([]);
    const [selectDepartment, setselectDepartment] = useState("")
    const [designationname, setdesignationname] = useState("")
    const [designationList, setDesignationList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    // Load departments from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("departments");
        if (stored) {
            setdepartments(JSON.parse(stored));
        }
    }, []);
    // Load designation list from localStorage
    useEffect(() => {
        const storedesignationame = localStorage.getItem("designationname");
        if (storedesignationame) {
            setDesignationList(JSON.parse(storedesignationame));
        }
    }, []);


    const handleSaveEdit = () => {
        if (editIndex === null) {
            alert("Please click Edit on a row first.");
            return;
        }
        if (!designationname.trim() || !selectDepartment) {
            alert("Please fill in all fields.");
            return;
        }

        const newEntry = {
            designation: designationname.trim(),
            department: selectDepartment
        };
        const updatedList = [...designationList];
        updatedList[editIndex] = newEntry;

        setDesignationList(updatedList);
        localStorage.setItem("designationname", JSON.stringify(updatedList));

        setEditIndex(null);
        setdesignationname("");
        setselectDepartment("");
    };


    const handleSave = () => {
        if (!designationname.trim() || !selectDepartment) {
            alert("Please fill in all fields.");
            return;
        }

        const newEntry = {
            designation: designationname.trim(),
            department: selectDepartment
        };

        const updatedList = [...designationList, newEntry];
        setDesignationList(updatedList);
        localStorage.setItem("designationname", JSON.stringify(updatedList));

        setdesignationname("");
        setselectDepartment("");
    };
    const handleDelete = (index) => {
        const newList = designationList.filter((_, i) => i !== index);
        setDesignationList(newList);
        localStorage.setItem("designationname", JSON.stringify(newList));

        if (editIndex === index) {
            setEditIndex(null);
            setdesignationname("");
            setselectDepartment("");
        }
    };
    return (
        <>
            <div className="max-w-3xl mx-auto p-6 bg-white  rounded space-y-6">
                <div className="selectdepartmen">
                    <label className="block font-semibold mb-1">Select Department</label>
                    <select value={selectDepartment} onChange={(e) => setselectDepartment(e.target.value)}>
                        <option value="">Select Department</option>
                        {/* map departments here */}
                        {departments.map((dept, idx) => (<option key={idx} value={dept}> {dept} </option>))}
                    </select>
                </div>
                <div className="EnterDesignation">
                    <label className="block font-semibold mb-1">Designation Name</label>
                    <input value={designationname} onChange={(e) => setdesignationname(e.target.value)} type="text" className="w-full border p-2 rounded" placeholder="e.g. Manager, HR Executive"
                    />
                </div>
                <div className="flex gap-10">
                    {/* This button is shown only when NOT editing */}
                    {editIndex === null && (<button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" > Save </button>)}
                    {/* This button is shown only when editing */}
                    {editIndex !== null && (<button onClick={handleSaveEdit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" >Save Edit </button>)}

                    {/* <button onClick={handleSave} className="bg-green-400 text-white px-4 py-2 rounded hover:bg-blue-700"> Save </button>
                 <button onClick={handleSaveEdit}  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"> Save Edit</button> */}
                </div>

                <div className="pt-4 ListogDesignation">
                    <h2 className="text-lg font-bold mb-2">Designation List</h2>
                    <table className="w-full border text-left text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2">SNo.</th>
                                <th className="p-2">Departments</th>
                                <th className="p-2">Designation</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* map designations */}
                            {designationList.map((item, index) => (
                                <tr key={index}>
                                    <td className="p-2">{index + 1}</td>
                                    <td className="p-2">{item.department}</td>
                                    <td className="p-2">{item.designation}</td>
                                    <td className="p-2 space-x-2">
                                        <button onClick={() => { setEditIndex(index); setdesignationname(item.designation); setselectDepartment(item.department); }} className="bg-yellow-400 px-2 py-1 rounded">Edit</button>
                                        <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DesignationSetting;