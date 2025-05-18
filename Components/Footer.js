import Link from 'next/link';
import logo from '../Images/Others/logo.png';
import call from '../Images/Others/call-wt.svg';
import location from '../Images/Others/location-wt.svg';
import mail from '../Images/Others/mail.svg';

import bckImg from '../Images/Footer/image1.png';

import { call as callF } from './exports';
import { useEffect, useRef } from 'react';

const Footer = ({ getLoc, usersPosition }) => {
  const footerRef = useRef();

  useEffect(() => {
    if (footerRef.current != null) {
      getLoc(footerRef.current.offsetTop);
    }
  }, []);

  return (
    <div ref={footerRef} className='bg-pr-black text-white relative'>
      <div className='absolute h-full after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-r from-[rgba(0,0,0,0.65)] to-rgba(0,0,0,0.25) md:hidden lg:w-[300px]'>
        <img className='h-full' src={bckImg.src} alt='Auto Škola Avala Resnik'/>
      </div>
      <div className='w2 pt-20 md:pt-0 md:!w-full relative'>
        <div className='flex justify-between pb-10 md:flex-col'>
          <div className=' md:bg-white'>
            <img className='w-[250px] xs:w-[150px]' src={logo.src} alt='Auto Škola Avala Resnik'/>
          </div>
          <div className='md:px-2 md:py-5'>
            <h3 className='mb-5 font-semibold text-lg'>Linkovi</h3>
            <Link className='block inter my-2' href='/'>
              Početna
            </Link>
            <Link className='block inter my-2' href='/lokacija'>
              Lokacija
            </Link>
            <Link className='block inter my-2' href='/kako-do-vozacke'>
              Kako do vozačke
            </Link>
            <Link className='block inter my-2' href='/vozila'>
              Vozila
            </Link>
            <Link className='block inter my-2' href='/cenovnik'>
              Cenovnik
            </Link>
          </div>
          <div className='md:px-2 md:py-5'>
            <h3 className='mb-5 font-semibold text-lg'>Kontakt</h3>
            <a
              className='flex items-center my-2 cursor-pointer'
              target='_blank'
              href='https://www.google.com/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D1%80+%D0%B7%D0%B0+%D0%BE%D0%B1%D1%83%D0%BA%D1%83+%D0%B2%D0%BE%D0%B7%D0%B0%D1%87%D0%B0+,,Top+Drive+Gold%22/@44.7124501,20.4610483,19z/data=!3m1!4b1!4m5!3m4!1s0x475a738ed6e58577:0xa56d3b649b9a958!8m2!3d44.7124491!4d20.4615968?authuser=3'
            >
              <img className='w-[22px] mr-2' src={location.src} alt='Auto Škola Avala Resnik'/>
              <div className='inter'>Edvarda Griga 7 Resnik</div>
            </a>
            <div
              onClick={() => callF()}
              className='flex items-center my-2 cursor-pointer'
            >
              <img className='w-[22px] mr-2' src={call.src} alt='Auto Škola Avala Resnik'/>
              <div className='inter'>+381 65 870 1773</div>
            </div>
            <div>
              <a
                target='_blank'
                className='flex items-center my-2 cursor-pointer'
                href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTHVQjHPHqmjjvxkzvGWKPDbQbPwJsHKgPlFkbNNhwsZWnpSCmhDKkSgCSZhnGSxVPxLsq'
              >
                <img className='w-[22px] mr-2' src={mail.src} alt='Auto Škola Avala Resnik'/>
                <div className='inter'>autoskolaavala@gmail.com</div>
              </a>
            </div>
          </div>
          <div className='md:px-2 md:py-5'>
            <h3 className='font-semibold text-lg mb-5'>Dodjite do nas</h3>
            <div onClick={() => callF()} className='inter my-2 cursor-pointer'>
              Pozovi
            </div>
            <div className='inter my-2 cursor-pointer'>
              <a
                target='_blank'
                href='https://www.google.com/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D1%80+%D0%B7%D0%B0+%D0%BE%D0%B1%D1%83%D0%BA%D1%83+%D0%B2%D0%BE%D0%B7%D0%B0%D1%87%D0%B0+,,Top+Drive+Gold%22/@44.7124501,20.4610483,19z/data=!3m1!4b1!4m5!3m4!1s0x475a738ed6e58577:0xa56d3b649b9a958!8m2!3d44.7124491!4d20.4615968?authuser=3'
              >
                Prikaži najkraću putanju
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-t-slate-500 py-3 relative'>
        <h1 className='text-center sm:text-sm'>
          &copy; Sva prava zadržana | Auto Škola Avala Resnik
        </h1>
      </div>
    </div>
  );
};

export default Footer;
