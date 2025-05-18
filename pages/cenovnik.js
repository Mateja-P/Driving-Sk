import Head from 'next/head';
import Bck from '../Components/Bck';
import Button from '../Components/Button';
import { call } from '../Components/exports';
import favicon from '../Images/Others/favicon.png';

const cenovnik = ({ position }) => {
  return (
    <div>
      <Head>
        <title>Auto Škola Avala Resnik - Cenovnik</title>
        <meta
          name='description'
          content='Upoznajte se sa cenovnikom Auto Škole Avala Resnik'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="sr" />
        <meta name="theme-color" content="#5ABDCB" />
        <meta name="keywords" content="auto škola, vozačka dozvola, obuka vozača, auto škola Resnik, Auto Škola Avala Resnik" />
        <meta name="author" content="Auto Škola Avala Resnik" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Auto Škola Avala Resnik - Cenovnik" />
        <meta property="og:description" content="Efikasna i pristupačna obuka vozača u Resniku. Postanite vozač sa Auto Školom Avala." />
        <meta property="og:url" content="https://www.autoskolaavala.com/cenovnik" />
        <meta property="og:image" content="https://www.autoskolaavala.com/favicon.png" />
        <meta property="og:site_name" content="Auto Škola Avala Resnik" />

        <link rel="canonical" href="https://www.autoskolaavala.com" />
        <link rel='icon' href={favicon.src} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DrivingSchool",
            "name": "Auto Škola Avala Resnik",
            "url": "https://www.autoskolaavala.com/cenovnik",
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

      <div>
        <Bck title='Cenonvik' />
        <div className='my-32 sm:my-28'>
          <div className='w1'>
            <div className='text-center'>
              <div className='bg-[#333333] text-white py-5 text-lg'>
                B kategorija
              </div>
              <div className='font-semibold text-xl py-3 border-gray-100 border'>
                79.000 + taksa za MUP
              </div>
              <div className='lg-text py-3 border-gray-100 border inter'>
                Teorijska obuka 40 časova cena 14.000,00 dinara
              </div>
              <div className='lg-text py-3 border-gray-100 border inter'>
                Teorijski ispit 5.000 din + taksa za MUP 
              </div>
              <div className='lg-text py-3 border-gray-100 border inter'>
                Praktična obuka 55.000 dinara
              </div>
              <div className='lg-text py-3 border-gray-100 border inter'>
                Praktični ispit 5000 din + taksa za MUP
              </div>
              <div className='lg-text py-3 border-gray-100 border inter'>
                Obezbedjen popust na lekarsko uverenje + organizovana prva pomoć
              </div>
            </div>
            <div className='mt-10 flex justify-center gap-14'>
              <Button direction={true}>Prikaži lokaciju</Button>
              <Button onClick={() => call()}>Pozovi</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cenovnik;
