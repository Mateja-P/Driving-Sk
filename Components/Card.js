import { useState } from 'react';
import Link from 'next/link';
import arrowImg from '../Images/Others/arrow1.svg';

const Card = ({ title, text, img, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={href}
      className='bg-[#262427] flex flex-col justify-between w-[400px] 2xl:w-[700px] md:w-2/3 xs:w-10/12'
    >
      <div>
        <img className='h-[250px] w-full lg:h-[160px] md:h-[auto]' src={img} alt='Auto Škola Avala Resnik'/>
      </div>
      <div className='px-3 py-5 mb-10 lg:px-2 lg:py-3 lg:mb-6'>
        <div className='text-white text-lg font-semibold md:text-base'>
          {title}
        </div>
        <div className='text-[#87888D] inter text-sm mt-5 xs:text-xs'>
          {text}
        </div>
      </div>
      <div
        className={`${
          hovered ? 'bg-green text-white' : 'bg-white text-black'
        } flex items-center justify-end relative overflow-hidden pr-5 py-2 lg:justify-center lg:bg-green lg:text-white`}
      >
        <div className='flex absolute left-0 top-1/2 translate-y-[-50%] lg:hidden'>
          <img
            className={`${
              hovered ? 'w-[50px]' : 'w-[45px]'
            }  transition-all duration-500 ease-in`}
            src={arrowImg.src}
            alt='Auto Škola Avala Resnik'
          />
          <img
            className={`${
              hovered ? 'w-[50px]' : 'w-[45px]'
            }  transition-all duration-500 ease-in`}
            src={arrowImg.src}
            alt='Auto Škola Avala Resnik'
          />
          <img
            className={`${
              hovered ? 'w-[50px]' : 'w-[45px]'
            }  transition-all duration-500 ease-in`}
            src={arrowImg.src}
            alt='Auto Škola Avala Resnik'
          />
          <img
            className={`${
              hovered ? 'w-[50px]' : 'w-[45px]'
            }  transition-all duration-500 ease-in`}
            src={arrowImg.src}
            alt='Auto Škola Avala Resnik'
          />
        </div>
        <div className='font-medium text-md sm:text-sm'>Pročitaj više</div>
      </div>
    </Link>
  );
};

export default Card;
