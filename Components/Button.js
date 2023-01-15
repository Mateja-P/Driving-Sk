import { useState } from 'react';

const Button = ({ children, onClick, blank, position }) => {
  const clicked = () => {
    if (position !== 0) {
      window.open(
        `https://www.google.com/maps/dir/${position}/%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D1%80+%D0%B7%D0%B0+%D0%BE%D0%B1%D1%83%D0%BA%D1%83+%D0%B2%D0%BE%D0%B7%D0%B0%D1%87%D0%B0+,,Top+Drive+Gold%22,+Edvarda+Griga+7b,+Beograd+11231/@44.7430411,20.4024085,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x475a6fda10a5d159:0x513f9f9d4a5d5bb4!2m2!1d20.4137645!2d44.7738858!1m5!1m1!1s0x475a738ed6e58577:0xa56d3b649b9a958!2m2!1d20.4615968!2d44.7124491!3e3?authuser=3`,
        '_blank'
      );
    }
  };

  return (
    <div>
      {blank ? (
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
