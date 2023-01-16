import { useState, useEffect, useRef } from 'react';

import location_img from '../Images/Others/location-wt.svg';
import clock_img from '../Images/Others/clock.svg';
import call_img from '../Images/Others/call-wt.svg';
import logo from '../Images/Others/logo.png';
import Link from 'next/link';
import StickyHeader from './StickyHeader';

import { call } from './exports';

const Header = ({ usersPosition }) => {
  const [stick, setStick] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (headerRef.current !== null) {
        if (window.scrollY > headerRef.current.offsetHeight) {
          setStick(true);
        } else {
          setStick(false);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (stick) {
      setOpenMenu(false);
    }
  }, [stick]);

  return (
    <div ref={headerRef}>
      <StickyHeader isVisible={stick} usersPosition={usersPosition} />
      <div className='bg-pr-black py-3 px-10 sm:px-5'>
        <div className='flex justify-between lg:flex-col'>
          <div className='flex lg:flex-col'>
            <div>
              <a
                className='flex items-center mr-5 cursor-pointer'
                href={`https://www.google.com/maps/dir/%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D1%80+%D0%B7%D0%B0+%D0%BE%D0%B1%D1%83%D0%BA%D1%83+%D0%B2%D0%BE%D0%B7%D0%B0%D1%87%D0%B0+,,Top+Drive+Gold%22,+Edvarda+Griga+7b,+Beograd+11231/@44.7430411,20.4024085,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x475a6fda10a5d159:0x513f9f9d4a5d5bb4!2m2!1d20.4137645!2d44.7738858!1m5!1m1!1s0x475a738ed6e58577:0xa56d3b649b9a958!2m2!1d20.4615968!2d44.7124491!3e3?authuser=3`}
                target='_blank'
              >
                <img className='h-ic mr-2' src={location_img.src} />
                <h4 className='uppercase text-white text-sm xs:text-xs'>
                  prikaži putanju:
                  <span className='capitalize text-green'>
                    {' '}
                    Edvarda Griga 7
                  </span>
                </h4>
              </a>
            </div>
            <div className='flex items-center lg:my-4'>
              <img className='h-ic mr-2' src={clock_img.src} />
              <h4 className='uppercase text-white text-sm xs:text-xs'>
                radno vreme:
                <span className='capitalize text-green'>
                  {' '}
                  Ponedeljak-Petak od 9 do 17
                </span>
              </h4>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                call();
              }}
              className='flex items-center cursor-pointer'
            >
              <img className='h-ic mr-2' src={call_img.src} />
              <h4 className='uppercase text-white text-sm xs:text-xs'>
                pozovi na broj:{' '}
                <span className='capitalize text-green'>+381 65 870 17 73</span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center py-4 px-10 lg:px-2 md:px-10 sm:px-5'>
        <div>
          <img className='w-[180px]' src={logo.src} />
        </div>
        <div
          className={`md:fixed md:w-full md:top-0 md:flex md:flex-col md:justify-between md:bg-pr-black md:h-screen md:text-white md:p-8 md:pt-20 transition-all duration-700 ease-in-out md:z-[998] ${
            openMenu ? 'md:right-0' : 'md:right-[-100%]'
          }`}
        >
          <div className='md:flex md:flex-col'>
            <Link
              onClick={() => setOpenMenu(false)}
              className='mr-7 text-[14px] font-medium md:text-3xl md:my-5 sm:text-2xl'
              href='/'
            >
              Početna
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              className='text-[14px] mr-7 font-medium md:text-3xl md:my-5 sm:text-2xl'
              href='/lokacija'
            >
              Lokacija
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              className='text-[14px] mr-7 font-medium md:text-3xl md:my-5 sm:text-2xl'
              href='/kako-do-vozacke'
            >
              Kako do vozačke
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              className='mr-7 text-[14px] font-medium md:text-3xl md:my-5 sm:text-2xl'
              href='/vozila'
            >
              Vozila
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              className='text-[14px] font-medium md:text-3xl md:my-5 sm:text-2xl'
              href='/cenovnik'
            >
              Cenovnik
            </Link>
          </div>
          <div className='hidden md:flex md:justify-between md:mt-10 '>
            <div className='bg-green py-3 px-6 xs:px-5 xs:py-3'>
              <a
                href={`https://www.google.com/maps/dir/${usersPosition}/%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D1%80+%D0%B7%D0%B0+%D0%BE%D0%B1%D1%83%D0%BA%D1%83+%D0%B2%D0%BE%D0%B7%D0%B0%D1%87%D0%B0+,,Top+Drive+Gold%22,+Edvarda+Griga+7b,+Beograd+11231/@44.7430411,20.4024085,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x475a6fda10a5d159:0x513f9f9d4a5d5bb4!2m2!1d20.4137645!2d44.7738858!1m5!1m1!1s0x475a738ed6e58577:0xa56d3b649b9a958!2m2!1d20.4615968!2d44.7124491!3e3?authuser=3`}
                target='_blank'
              >
                Prikaži Direkciju
              </a>
            </div>
            <div
              onClick={() => call()}
              className='bg-green py-3 px-6 xs:px-5 xs:py-3'
            >
              Pozovi
            </div>
          </div>
        </div>
        <div
          className={`hidden md:flex md:flex-col md:justify-between md:w-5 md:h-5 transition-all duration-600 ease-in md:z-[999] ${
            openMenu ? 'absolute top-[20px] right-[20px]' : ''
          }`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div
            className={`w-full h-0.5 bg-black transition-all duration-600 ease-in ${
              openMenu ? 'rotate-[-45deg] translate-y-[9px] bg-white' : ''
            }`}
          ></div>
          <div
            className={`w-full h-0.5 translate-x-1 bg-black transition-all duration-600 ease-in ${
              openMenu ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-black transition-all duration-600 ease-in ${
              openMenu ? 'rotate-45 translate-y-[-9px] bg-white' : ''
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
