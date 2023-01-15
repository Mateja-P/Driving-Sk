import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

import { call } from '../Components/exports';

const QuickActions = ({ position }) => {
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
                  window.open(
                    `https://www.google.com/maps/dir/${position}/%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D1%80+%D0%B7%D0%B0+%D0%BE%D0%B1%D1%83%D0%BA%D1%83+%D0%B2%D0%BE%D0%B7%D0%B0%D1%87%D0%B0+,,Top+Drive+Gold%22,+Edvarda+Griga+7b,+Beograd+11231/@44.7430411,20.4024085,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x475a6fda10a5d159:0x513f9f9d4a5d5bb4!2m2!1d20.4137645!2d44.7738858!1m5!1m1!1s0x475a738ed6e58577:0xa56d3b649b9a958!2m2!1d20.4615968!2d44.7124491!3e3?authuser=3`,
                    '_blank'
                  );
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
