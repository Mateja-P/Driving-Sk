import { useEffect, useState } from 'react';
import Image from 'next/image';

const ImageComp = ({ src, num, triangleColor }) => {
  return (
    <div className='relative overflow-hidden h-full w-full'>
      <div
        className={`top-triangle border-transparent ${
          triangleColor && `${triangleColor}`
        }`}
      ></div>
      <img className='h-full w-full' src={src} alt='Auto Škola Avala Resnik' />
      <div
        className={`bottom-triangle border-transparent ${num && 'hidden'} ${
          triangleColor && `${triangleColor}`
        }`}
      ></div>
    </div>
  );
};

export default ImageComp;
