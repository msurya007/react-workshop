import React, { useState } from 'react';
import { Avatar, IconButton, Typography, Collapse  } from '@mui/material';
import { Menu as MenuIcon, Dashboard as DashboardIcon, Search as SearchIcon, Logout as LogoutIcon, Notifications as NotificationsIcon, Person, Speed } from '@mui/icons-material';


const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-sky-500 text-white flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && <Typography variant="h6">App Logo</Typography>}
        <IconButton color="inherit" onClick={handleToggleCollapse}>
          <MenuIcon />
        </IconButton>
      </div>
      <nav className="flex-grow">
        <ul>
          <li className="p-4 flex items-center hover:bg-white cursor-pointer hover:text-black">
            <Speed className="mr-2" />
            <Collapse in={!isCollapsed}>
              <Typography variant="body1">Dashboard</Typography>
            </Collapse>
          </li>
          <li className="p-4 flex items-center hover:bg-white cursor-pointer hover:text-black">
            <Person className="mr-2" />
            <Collapse in={!isCollapsed}>
              <Typography variant="body1">Search</Typography>
            </Collapse>
          </li>
          {/* Add more sidebar items here */}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;