import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear(); // or localStorage.removeItem("token");
        toast.success("Logged out successfully!");
        navigate("/");
    };
    return (
        <div>
            <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"> Logout </button>
        </div>
    )
};
export default Logout

