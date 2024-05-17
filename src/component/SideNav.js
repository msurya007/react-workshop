import React, { useState } from 'react';
import { IconButton, Typography, Collapse  } from '@mui/material';
import { Menu as MenuIcon, Person, Speed, Groups, Security, LocalShipping, MedicalServices, EventNote, PermContactCalendar } from '@mui/icons-material';


const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-sky-500 text-white flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && <Typography variant="h6">Health</Typography>}
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
              <Typography variant="body1">Patient</Typography>
            </Collapse>
          </li>
          <li className="p-4 flex items-center hover:bg-white cursor-pointer hover:text-black">
            <Groups className="mr-2" />
            <Collapse in={!isCollapsed}>
              <Typography variant="body1">Patient Group</Typography>
            </Collapse>
          </li>
          <li className="p-4 flex items-center hover:bg-white cursor-pointer hover:text-black">
            <Security className="mr-2" />
            <Collapse in={!isCollapsed}>
              <Typography variant="body1">Security</Typography>
            </Collapse>
          </li>
          <li className="p-4 flex items-center hover:bg-white cursor-pointer hover:text-black">
            <LocalShipping className="mr-2" />
            <Collapse in={!isCollapsed}>
              <Typography variant="body1">Shipping</Typography>
            </Collapse>
          </li>
          <li className="p-4 flex items-center hover:bg-white cursor-pointer hover:text-black">
            <MedicalServices className="mr-2" />
            <Collapse in={!isCollapsed}>
              <Typography variant="body1">Medical Service</Typography>
            </Collapse>
          </li>
          <li className="p-4 flex items-center hover:bg-white cursor-pointer hover:text-black">
            <EventNote className="mr-2" />
            <Collapse in={!isCollapsed}>
              <Typography variant="body1">Events</Typography>
            </Collapse>
          </li>
          <li className="p-4 flex items-center hover:bg-white cursor-pointer hover:text-black">
            <PermContactCalendar className="mr-2" />
            <Collapse in={!isCollapsed}>
              <Typography variant="body1">Events</Typography>
            </Collapse>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;