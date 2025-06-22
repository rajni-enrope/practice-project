import { useState, useEffect } from "react";
import Sidebar from './SidebarAdmin';

// icons 
import { MdHome, MdPerson, MdSettings, MdEdit, MdInfo, MdLogout, MdPeople } from 'react-icons/md';
import LogoutAdmin from "./LogoutAdmin";
import DepartmentSetting from "../AdminComponent/Department Settings";
import DesignationSetting from "../AdminComponent/DesignationSettings";
import EmployeeDetails from "../AdminComponent/EmployeeDetails";
import PrivacyPolicyVMS from "../EnropeVMS/PrivacyPolicyVMS";
import RefundPolicyVMS from "../EnropeVMS/RefundPolicy";


const DashboardAdmin = () => {
  // const tabs = ['Home', 'Profile', 'Settings', "EditProfile","UserDetails",Employee Information Management"","Logout"];
  const [activeTab, setActiveTab] = useState('Home');
  const [opensidebar, setopensidebar] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);


  useEffect(() => {
    if (window.innerWidth < 768) {
      setopensidebar(false); //  Automatically collapse sidebar on mobile
    } else {
      setopensidebar(true); // Open it on desktop
    }
  }, []);

  const tabs = [
    { label: 'Department ', icon: <MdHome size={25} /> },
    { label: 'Designation ', icon: <MdPerson size={25} /> },,
    { label: 'Employeedetails', icon: <MdEdit size={25} /> },
     { label: 'PrivacyPolicyVMS', icon: <MdEdit size={25} /> },
    { label: 'RefundPolicyVMS', icon: <MdEdit size={25} /> },
    // { label: 'UserDetails', icon: <MdInfo size={25} /> },
    // { label: 'Employee Information Management', icon: <MdPeople size={25} /> },
    { label: 'Logout', icon: <MdLogout size={25} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Department ':
        return <DepartmentSetting/>;
      case 'Designation ':
        return <DesignationSetting/>;
        case 'Employeedetails':
        return <EmployeeDetails/>;
         case 'PrivacyPolicyVMS':
        return <PrivacyPolicyVMS/>;
        case 'RefundPolicyVMS':
        return <RefundPolicyVMS/>;
    
      case 'Logout':
        return <LogoutAdmin/>;
      default:

        return <div>Select a tab</div>;
    }
  };

  return (


    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar tabs={tabs} activeTab={activeTab} onTabClick={(tab) => {
        setActiveTab(tab); // change the active tab
        if (window.innerWidth < 768) {
          setopensidebar(false); // hide sidebar on mobile
        }
      }}
        opensidebar={opensidebar}
        setopensidebar={setopensidebar}
      />
      <div className="flex-1 flex flex-col max-h-screen overflow-hidden">
        {/* <Header opensidebar={opensidebar} /> */}
        <main className={`flex-1 p-8 overflow-y-auto max-h-screen transition-all duration-300
   'md:ml-60 ml-0 pr-4' : 'md:ml-16 ml-1 pr-4'
   ${opensidebar ? 'ml-0' : 'ml-10 md:ml-0'}  `}  >
          {/* mobile ml-8, desktop md:ml-1 */}
          <div className="bg-white shadow p-6 rounded min-h-full">
            {renderContent()}
          </div>
        </main>
      </div>


    </div>
  );
};

export default DashboardAdmin;