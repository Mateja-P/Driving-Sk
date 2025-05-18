import { useState } from 'react';

const Button = ({ children, onClick, direction }) => {
  const clicked = () => {
    if (direction) {
      window.open(
        `https://www.google.com/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D1%80+%D0%B7%D0%B0+%D0%BE%D0%B1%D1%83%D0%BA%D1%83+%D0%B2%D0%BE%D0%B7%D0%B0%D1%87%D0%B0+,,Top+Drive+Gold%22/@44.7124501,20.4610483,19z/data=!3m1!4b1!4m5!3m4!1s0x475a738ed6e58577:0xa56d3b649b9a958!8m2!3d44.7124491!4d20.4615968?authuser=3`,
        '_blank'
      );
    }
  };

  return (
    <div>
      {direction ? (
        <div
          className='cursor-pointer uppercase bg-black text-white px-5 py-4 !inline text-xs'
          onClick={clicked}
        >
          {children}
        </div>
      ) : (
        <div
          className='cursor-pointer uppercase bg-black text-white px-5 py-4 !inline text-xs'
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Button;
