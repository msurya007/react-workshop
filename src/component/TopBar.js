import React from 'react';
import { Avatar, IconButton, Badge, Button, TextField, InputAdornment } from '@mui/material';
import { Search, NotificationsNone, Add, Settings, Campaign } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white p-4 shadow">
      <div className="relative w-full max-w-xs">
        <TextField
          variant="outlined"
          placeholder="Last Name / first name"
          className="w-full rounded-3xl"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search className="text-gray-500" />
              </InputAdornment>
            ),
            classes: { root: 'pl-2 pr-4 py-2 rounded-full border-gray-300 focus:border-blue-500' },
          }}
        />
      </div>
      <div className='flex'>
        <div className="flex items-center px-2 rounded-3xl bg-sky-500 text-white">
          <Search /> <Button>Advanced Search</Button>
        </div>
        <div className="flex items-center ml-2 px-2 rounded-3xl bg-sky-500 text-white">
          <Add /> <Button>Patient</Button>
        </div>
      </div>
      <div className="flex items-center">
        <IconButton color="inherit">
          <Badge badgeContent={1} color="error">
            <NotificationsNone />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Settings />
        </IconButton>
        <IconButton color="inherit">
          <Campaign />
        </IconButton>
        <Avatar className="ml-4" />
        
      </div>
    </div>
  );
};

export default Topbar;