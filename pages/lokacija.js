import React from 'react';
import Bck from '../Components/Bck';
import ImageComp from '../Components/ImageComp';
import Head from 'next/head';
import Button from '../Components/Button';
import decoration from '../Images/Others/decoration.png';
import { call } from '../Components/exports';
import Slide from '../Components/Slide';

import image1 from '../Images/Lokacija/image1.png';
import slideImg1 from '../Images/Lokacija/Slider/image1.jpg';
import slideImg2 from '../Images/Lokacija/Slider/image2.jpg';
import slideImg3 from '../Images/Lokacija/Slider/image3.jpg';
import slideImg4 from '../Images/Lokacija/Slider/image4.jpg';
import favicon from '../Images/Others/favicon.png';

const lokacija = ({ position }) => {
  return (
    <div>
      <Head>
        <title>Auto Škola Avala Resnik - Lokacija</title>
        <meta
          name='description'
          content='Auto Škola Avala u resniku se nalazi preko puta najpoznatijeg tržnog centra u Resniku u ulici Edvarda Griga 7. Pored prometne lokacije, naš lokal možete lako prepoznati po plakatima na samom ulazu.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="sr" />
        <meta name="theme-color" content="#5ABDCB" />
        <meta name="keywords" content="auto škola, vozačka dozvola, obuka vozača, auto škola Resnik, Auto Škola Avala Resnik" />
        <meta name="author" content="Auto Škola Avala Resnik" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Auto Škola Avala Resnik - Lokacija" />
        <meta property="og:description" content="Efikasna i pristupačna obuka vozača u Resniku. Postanite vozač sa Auto Školom Avala." />
        <meta property="og:url" content="https://www.autoskolaavala.com/lokacija" />
        <meta property="og:image" content="https://www.autoskolaavala.com/favicon.png" />
        <meta property="og:site_name" content="Auto Škola Avala Resnik" />

        <link rel="canonical" href="https://www.autoskolaavala.com/lokacija" />
        <link rel='icon' href={favicon.src} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DrivingSchool",
            "name": "Auto Škola Avala Resnik",
            "url": "https://www.autoskolaavala.com/lokacija",
            "logo": "https://www.autoskolaavala.com/logo.png",
            "description": "Auto Škola Avala Resnik nudi kvalitetnu i pristupačnu obuku vozača u Beogradu.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Edvarda Griga 7",
              "addressLocality": "Resnik",
              "addressRegion": "Beograd",
              "postalCode": "11000",
              "addressCountry": "RS"
            },
            "telephone": "+381 65 870 1773"
          })
        }} />
      </Head>
      <Bck title='Lokacija' />

      {/* 1 SECTION */}
      <div className='my-32 sm:my-28'>
        <div className='w2 flex gap-20 items-center lg:gap-6 md:flex-col-reverse'>
          <div className='w-[1000px] lg:w-auto lg:flex-1 md:mt-10 sm:mt-20 sm:w-10/12'>
            <ImageComp src={image1.src} triangleColor='!border-x-[#fff]' />
          </div>
          <div className='relative lg:flex-1'>
            <h1 className='section-title'>
              Auto Školu Avala možete naći na dobro poznatoj lokaciji u
              Resniku
            </h1>
            <p className='lg-text mt-8 mb-16'>
              Auto Škola Avala se nalazi preko puta najpoznatijeg tržnog centra u
              Resniku u ulici Edvarda Griga 7. Pored tržnog centra u blizini je
              i okretnica autobusa 94 i 506. Pored prometne lokacije, naš lokal
              možete lako prepoznati po plakatima na samom ulazu.
            </p>
            <div className='my-5 flex gap-10'>
              <Button direction={true}>Prikaži putanju</Button>
              <Button onClick={() => call()}>Pozovi</Button>
            </div>
            <div className='absolute bottom-[-50px] right-[-20px] md:bottom-0 md:right-0 sm:bottom-[-30px]'>
              <img src={decoration.src} alt='Auto Škola Avala Resnik'/>
            </div>
          </div>
        </div>
      </div>

      {/* 2 SECTION */}
      <div className='relative my-32 sm:my-28 py-20'>
        <div className='absolute h-full w-4/6 top-0 left-0 clip bg-pr-black z-[-1]'></div>
        <div className='w2'>
          <div className='flex justify-between items-start xl:gap-10 md:flex-col md:items-center'>
            <div className='flex-1 text-white xl:w-1/2 md:w-full'>
              <h1 className='section-title 2xl:w-2/3 xl:w-4/5 md:w-full'>
                Auto Škola Avala kao mesto za učenje
              </h1>
              <p className='lg-text mt-14 w-[700px] xl:w-auto'>
                U ovim učionicama naši polaznici stiču elementarno znanje o
                saobraćaju i polažu teorijski ispit. 90% njih iz prve položi
                teorijki deo što bi vama dalo vetar u ledja da otpočnete
                školovanje baš kod nas.
              </p>
            </div>
            <div className='w-[550px] 2xl:flex-1 2xl:w-[400px] xl:w-1/2 md:w-3/4 sm:w-4/5'>
              <Slide
                settings={{
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  arrows: false,
                }}
              >
                <div>
                  <img className='w-50%' src={slideImg1.src} alt='Auto Škola Avala Resnik'/>
                </div>
                <div>
                  <img className='w-full' src={slideImg2.src} alt='Auto Škola Avala Resnik'/>
                </div>
                <div>
                  <img className='w-full' src={slideImg3.src} alt='Auto Škola Avala Resnik' />
                </div>
                <div>
                  <img className='w-full' src={slideImg4.src} alt='Auto Škola Avala Resnik' />
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>

      {/* 3 SECTION */}
      <div>
        <div className='flex items-center flex-col justify-center'>
          <h2 className='section-title text-center'>
            Biće nam drago da se vidimo, DOBRO DOŠLI
          </h2>
          <div className='my-10 flex gap-10'>
            <Button direction={true}>Prikaži najkraću putanju</Button>
            <Button onClick={() => call()}>Pozovi</Button>
          </div>
        </div>
        <iframe
          className='w-full h-[250px]'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.4191015104872!2d20.461710392903957!3d44.71241055990147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a738ed6e58577%3A0xa56d3b649b9a958!2z0KbQtdC90YLQsNGAINC30LAg0L7QsdGD0LrRgyDQstC-0LfQsNGH0LAgLCxUb3AgRHJpdmUgR29sZCI!5e0!3m2!1sen!2srs!4v1673784319867!5m2!1sen!2srs'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default lokacija;
