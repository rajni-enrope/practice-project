import { useState ,useEffect  } from "react";
import Homepage from "../Components/HomePage";
import ProfilePage from "../Components/ProfilePage";
import SettingPage from "../Components/SettingPage";
import Sidebar from './Sidebar';
import EditProfileNew from "../Components/EditProfilee";
import Logout from "../Components/LogOut";
import UserDetails from "../Components/UserDetail";
import Header from "../Components/TopHeader";
import Login from "./Login";

// icons 
import { MdHome, MdPerson, MdSettings, MdEdit, MdInfo, MdLogout } from 'react-icons/md';


const Dashboard = () => {
  // const tabs = ['Home', 'Profile', 'Settings', "EditProfile","UserDetails","Logout"];
  const [activeTab, setActiveTab] = useState('Home');
  const [opensidebar, setopensidebar] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
   
  
  // useEffect(() => {
  //   // Check screen width on mount
  //   if (window.innerWidth < 768) {  // Tailwind's md breakpoint = 768px
  //     setopensidebar(false);  // Close sidebar on mobile
  //   } else {
  //     setopensidebar(true);   // Open sidebar on desktop
  //   }
  //    setHasLoaded(true);
  // }, []);

  useEffect(() => {
  if (window.innerWidth < 768) {
    setopensidebar(false); //  Automatically collapse sidebar on mobile
  } else {
    setopensidebar(true); // Open it on desktop
  }
}, []);

  const tabs = [
    { label: 'Home', icon: <MdHome size={25} /> },
    { label: 'Profile', icon: <MdPerson size={25} /> },
    { label: 'Settings', icon: <MdSettings size={25} /> },
    { label: 'EditProfile', icon: <MdEdit size={25} /> },
    { label: 'UserDetails', icon: <MdInfo size={25} /> },
    { label: 'Logout', icon: <MdLogout size={25} /> },
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

  return (

    
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar tabs={tabs} activeTab={activeTab} onTabClick={(tab) => { setActiveTab(tab); // change the active tab
   if (window.innerWidth < 768) {
      setopensidebar(false); // hide sidebar on mobile
    }
  }}
  opensidebar={opensidebar}
  setopensidebar={setopensidebar}
/>
    <div className="flex-1 flex flex-col max-h-screen overflow-hidden">
   <Header opensidebar={opensidebar} />
      <main  className={`flex-1 p-8 overflow-y-auto max-h-screen transition-all duration-300
   'md:ml-60 ml-0 pr-4' : 'md:ml-16 ml-1 pr-4'
   ${opensidebar ? 'ml-0' : 'ml-10 md:ml-0' }  `}  >
    {/* mobile ml-8, desktop md:ml-1 */}
        <div className="bg-white shadow p-6 rounded min-h-full">
          {renderContent()}
        </div>
      </main>
    </div>

   
    </div>
  );
};

export default Dashboard;