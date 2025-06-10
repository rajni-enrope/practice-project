import React from 'react';
//icons
import { MdMenu } from "react-icons/md";

const Sidebar = ({ tabs, activeTab, onTabClick, opensidebar, setopensidebar }) => {
  return (
    <nav   className={`h-screen text-white bg-gray-800 p-1 shadow-md duration-500 fixed top-0 left-0 z-50 ${opensidebar ? "w-60" : "w-12"} 
    md:relative md:block
  `}
  style={{ zIndex: 1000 }}>
      {/* <div className="w-64 bg-gray-800 text-white p-6 min-h-screen"> */}

      <div className='flex justify-between '>
        <h2 className={`text-2xl font-bold mb-6 transition-all duration-500 overflow-hidden whitespace-nowrap  ${opensidebar ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`} > SideBar </h2>
        <MdMenu size={30} className="cursor-pointer  mr-2" onClick={() => setopensidebar(!opensidebar)} />
      </div>
      <div>
        <ul className="space-y-3">
          {tabs.map((tab) => (
            <li
              key={tab.label}
              className={`flex relative items-center gap-2 mr-4 px-0.5 py-1 my-2 rounded-md cursor-pointer
              ${opensidebar && activeTab === tab.label ? 'bg-gray-600' : ''}
              ${opensidebar && activeTab !== tab.label ? 'hover:bg-gray-700' : ''} `}
              onClick={() => onTabClick(tab.label)}
            >
              <span
                className={`text-3xl mr-[2px] rounded ${!opensidebar ? activeTab === tab.label ? 'bg-gray-600 ': 'hover:bg-gray-700 hover:ring-1 hover:ring-gray-500': '' } p-1 transition-colors duration-300`} >        
                 {tab.icon}</span>
              <span
                className={`transition-all duration-500 overflow-hidden whitespace-nowrap ${opensidebar ? 'opacity-100 w-auto ml-2' : 'opacity-0 w-0 ml-0'}`}  >
                {tab.label}
              </span>
            </li>
          ))}
        </ul>
      </div>


    </nav>

  );
};

export default Sidebar;