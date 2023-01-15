import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

import { call, direction } from '../Components/exports';

const QuickActions = () => {
  const router = useRouter();
  const [isVisible, setIsvisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    });
  }, [isVisible, router.pathname]);

  const actions = [
    { icon: <LocationOnIcon />, name: 'Prikazi Putanju' },
    { icon: <CallIcon />, name: 'Pozovi' },
  ];

  return (
    <div
      className={`z-[997] fixed bottom-[20px] transition-all duration-200 ease-in-out  ${
        isVisible ? 'right-[10px]' : 'right-[-100%]'
      }`}
    >
      <Box
        sx={{
          height: 320,
          transform: 'translateZ(0px)',
          flexGrow: 1,
        }}
      >
        <SpeedDial
          ariaLabel=''
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => {
                if (action.name == 'Pozovi') {
                  call();
                } else if (action.name == 'Prikazi Putanju') {
                  direction();
                }
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
};

export default QuickActions;
