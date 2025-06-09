import { useState } from "react";
import Homepage from "../Components/HomePage";
import ProfilePage from "../Components/ProfilePage";
import SettingPage from "../Components/SettingPage";
import Sidebar from './Sidebar';
import EditProfileNew from "../Components/EditProfilee";
import Logout from "../Components/LogOut";
import AddNewUser from "../Components/AddNewUser";
import Signup from "../Components/SingUp";
import UserDetails from "../Components/UserDetail";
import Login from "./Login";
import { Icons } from "react-toastify";
// icons 
import { MdHome, MdPerson, MdSettings, MdEdit, MdInfo, MdLogout } from 'react-icons/md';

const Dashboard = () => {
  // const tabs = ['Home', 'Profile', 'Settings', "EditProfile","UserDetails","Logout"];
  const [activeTab, setActiveTab] = useState('Home');
  const [opensidebar, setopensidebar] = useState(true);

  const tabs = [
    { label: 'Home', icon: <MdHome size={20} /> },
    { label: 'Profile', icon: <MdPerson size={20} /> },
    { label: 'Settings', icon: <MdSettings size={20} /> },
    { label: 'EditProfile', icon: <MdEdit size={20} /> },
    { label: 'UserDetails', icon: <MdInfo size={20} /> },
    { label: 'Logout', icon: <MdLogout size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Homepage />;
      case 'Profile':
        return <ProfilePage />;
      case 'Settings':
        return <SettingPage />;
      case 'EditProfile':
        return <EditProfileNew />;
      case 'UserDetails':
        return <UserDetails />;
      case 'Logout':
        return <Logout />;
      default:

        return <div>Select a tab</div>;
    }
  };

  //   return (
  //     <div className="flex bg-gray-100 min-h-screen">

  //       <Sidebar  tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} opensidebar={opensidebar} setopensidebar={setopensidebar} />
  //       <div className="flex-1 p-8">
  //         <h1 className="text-3xl font-semibold mb-4">{activeTab}</h1>
  //         <div className="bg-white shadow p-6 rounded">{renderContent()}</div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Dashboard;


  return (

    
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} opensidebar={opensidebar} setopensidebar={setopensidebar} />
     {opensidebar && (
      <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        onClick={() => setopensidebar(false)}
      />
    )}

    {/* Sidebar fixed on left with toggle width, Content area scrolls independentlyand Responsive collapse on smaller screens*/}
      <main  className={`flex-1 p-8 overflow-y-auto max-h-screen transition-all duration-300
   'md:ml-60  pr-4' : 'md:ml-16 ml-1 pr-4'
   ${opensidebar ? 'ml-0' : 'ml-8 md:ml-0' } 
 
  `}  >
    {/* mobile ml-8, desktop md:ml-1 */}
        <h1 className="text-3xl font-semibold mb-4 text-center flex-shrink-0">{activeTab}</h1>
        <div className="bg-white shadow p-6 rounded min-h-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;