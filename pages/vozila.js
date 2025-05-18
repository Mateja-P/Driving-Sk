import React from 'react';
import image1 from '../Images/Vozila/image1.jpg';
import image2 from '../Images/Vozila/image2.png';
import Bck from '../Components/Bck';
import Head from 'next/head';
import ImageComp from '../Components/ImageComp';
import favicon from '../Images/Others/favicon.png';

const Vozila = () => {
  return (
    <div>
      <Head>
        <title>Auto Škola Avala Resnik - Vozila</title>
        <meta
          name='description'
          content='Auto Škola Avala Resnik raspolaže vozilima mladjih generacija za lakše učenje naših polaznika. Isto tako vozila su birana da	početnici na najbolji način savladaju komande u voznji.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="sr" />
        <meta name="theme-color" content="#5ABDCB" />
        <meta name="keywords" content="auto škola, vozačka dozvola, obuka vozača, auto škola Resnik, Auto Škola Avala Resnik" />
        <meta name="author" content="Auto Škola Avala Resnik" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Auto Škola Avala Resnik - Vozila" />
        <meta property="og:description" content="Efikasna i pristupačna obuka vozača u Resniku. Postanite vozač sa Auto Školom Avala." />
        <meta property="og:url" content="https://www.autoskolaavala.com/vozila" />
        <meta property="og:image" content="https://www.autoskolaavala.com/favicon.png" />
        <meta property="og:site_name" content="Auto Škola Avala Resnik" />

        <link rel="canonical" href="https://www.autoskolaavala.com/vozila" />
        <link rel='icon' href={favicon.src} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DrivingSchool",
            "name": "Auto Škola Avala Resnik",
            "url": "https://www.autoskolaavala.com/vozila",
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

      <Bck title='Vozila' />
      <div className='my-32 sm:my-28'>
        <div className='w2'>
          <div className='flex md:flex-col-reverse'>
            <div className='w-[500px] mr-14 lg:flex-1 md:mt-5 sm:w-10/12 xs:w-11/12'>
              <ImageComp src={image1.src} triangleColor='!border-x-[#fff]' />
            </div>
            <h2 className='section-title lg:flex-1'>Škoda Fabia</h2>
          </div>
          <div className='flex mt-14 md:flex-col-reverse'>
            <div className='w-[500px] mr-14 lg:flex-1 md:mt-5 sm:w-10/12 xs:w-11/12'>
              <ImageComp src={image2.src} triangleColor='!border-x-[#fff]' />
            </div>
            <h2 className='section-title lg:flex-1'>Škoda Fabia</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vozila;
