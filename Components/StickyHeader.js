import logo from '../Images/Others/logo.png';
import Link from 'next/link';
import call_img from '../Images/Others/call-gr.svg';
import { call } from './exports';
import { useEffect, useState } from 'react';

const StickyHeader = ({ isVisible, usersPosition }) => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setMenu(false);
    }
  }, [isVisible]);

  return (
    <div
      className={`w-full px-5 py-5 flex items-center justify-between bg-white z-[999] fixed transition-all delay-75 duration-700 ease-in-out ${
        isVisible ? 'top-0 ' : 'top-[-100%]'
      }`}
    >
      <div>
        <img className='sm:w-[150px]' src={logo.src} />
      </div>
      <div
        className={`lg:fixed lg:w-full lg:top-0 lg:flex lg:flex-col lg:justify-between lg:bg-pr-black lg:h-screen transition-all  duration-700 ease-in-out lg:text-white lg:p-8 lg:pt-20 ${
          menu ? 'lg:right-0' : 'lg:right-[-100%]'
        }`}
      >
        <div className='lg:flex lg:flex-col'>
          <Link
            onClick={() => setMenu(false)}
            className='mr-7 text-[14px] font-medium lg:text-3xl lg:my-5 sm:text-2xl'
            href='/'
          >
            Početna
          </Link>
          <Link
            onClick={() => setMenu(false)}
            className='text-[14px] mr-7 font-medium lg:text-3xl lg:my-5 sm:text-2xl'
            href='/lokacija'
          >
            Lokacija
          </Link>
          <Link
            onClick={() => setMenu(false)}
            className='mr-7 text-[14px] font-medium lg:text-3xl lg:my-5 sm:text-2xl'
            href='/kako-do-vozacke'
          >
            Kako do vozačke
          </Link>
          <Link
            onClick={() => setMenu(false)}
            className='mr-7 text-[14px] font-medium lg:text-3xl lg:my-5 sm:text-2xl'
            href='/vozila'
          >
            Vozila
          </Link>
          <Link
            onClick={() => setMenu(false)}
            className='text-[14px] font-medium lg:text-3xl lg:my-5 sm:text-2xl'
            href='/cenovnik'
          >
            Cenovnik
          </Link>
        </div>
        <div className='hidden lg:flex lg:justify-between lg:mt-10'>
          <div className='bg-green py-3 px-6 xs:px-3 xs:py-2'>
            <a
              href={`https://www.google.com/maps/dir/${usersPosition}/%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D1%80+%D0%B7%D0%B0+%D0%BE%D0%B1%D1%83%D0%BA%D1%83+%D0%B2%D0%BE%D0%B7%D0%B0%D1%87%D0%B0+,,Top+Drive+Gold%22,+Edvarda+Griga+7b,+Beograd+11231/@44.7430411,20.4024085,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x475a6fda10a5d159:0x513f9f9d4a5d5bb4!2m2!1d20.4137645!2d44.7738858!1m5!1m1!1s0x475a738ed6e58577:0xa56d3b649b9a958!2m2!1d20.4615968!2d44.7124491!3e3?authuser=3`}
              target='_blank'
            >
              Prikaži Direkciju
            </a>
          </div>
          <div
            onClick={() => call()}
            className='bg-green py-3 px-6 xs:px-3 xs:py-2'
          >
            Pozovi
          </div>
        </div>
      </div>
      <div
        className={`hidden lg:flex lg:flex-col lg:justify-between lg:w-5 lg:h-5 transition-all duration-600 ease-in ${
          menu ? 'absolute top-[20px] right-[20px] z-[999]' : ''
        }`}
        onClick={() => setMenu(!menu)}
      >
        <div
          className={`w-full h-0.5 bg-black transition-all duration-600 ease-in ${
            menu ? 'rotate-[-45deg] translate-y-[9px] bg-white' : ''
          }`}
        ></div>
        <div
          className={`w-full h-0.5 translate-x-1 bg-black transition-all duration-600 ease-in ${
            menu ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-full h-0.5 bg-black transition-all duration-600 ease-in ${
            menu ? 'rotate-45 translate-y-[-9px] bg-white' : ''
          }`}
        ></div>
      </div>
      <div onClick={() => call()} className='lg:hidden'>
        <div className='flex cursor-pointer items-center relative '>
          <div className='mr-4'>
            <img className='w-[40px]' src={call_img.src} />
          </div>
          <div>
            <p className='text-lg-text'>Pozovi na broj</p>
            <p className='font-semibold'>+381 65 870 1773</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
