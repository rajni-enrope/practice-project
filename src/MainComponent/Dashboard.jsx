import { useState } from "react";
import Homepage from "../Components/HomePage";
import ProfilePage from "../Components/ProfilePage";
import SettingPage from "../Components/SettingPage";
import Sidebar from './Sidebar';
import EditProfileNew from "../Components/EditProfilee";

const Dashboard = () => {
  const tabs = ['Home', 'Profile', 'Settings',"EditProfile"];
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Homepage/>;
      case 'Profile':
        return  <ProfilePage/>;
      case 'Settings':
        return <SettingPage/>;
        case 'EditProfile':
        return  <EditProfileNew/>;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-4">{activeTab}</h1>
        <div className="bg-white shadow p-6 rounded">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;