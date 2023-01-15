import { useEffect, useState } from 'react';

const Image = ({ src, num, triangleColor }) => {
  return (
    <div className='relative overflow-hidden h-full w-full'>
      <div
        className={`top-triangle border-transparent ${
          triangleColor && `${triangleColor}`
        }`}
      ></div>
      <img className='h-full w-full' src={src} />
      <div
        className={`bottom-triangle border-transparent ${num && 'hidden'} ${
          triangleColor && `${triangleColor}`
        }`}
      ></div>
    </div>
  );
};

export default Image;
