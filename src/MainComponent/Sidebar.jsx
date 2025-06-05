import React from 'react';

const Sidebar = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">SideBar</h2>
      <ul className="space-y-3">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => onTabClick(tab)}
            className={`cursor-pointer p-2 rounded ${
              activeTab === tab ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;