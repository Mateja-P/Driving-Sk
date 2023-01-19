import React from 'react';
import image1 from '../Images/Vozila/image1.jpg';
import image2 from '../Images/Vozila/image2.png';
import Bck from '../Components/Bck';
import Head from 'next/head';
import Image from '../Components/Image';
import favicon from '../Images/Others/favicon.png';

const Vozila = () => {
  return (
    <div>
      <Head>
        <title>Auto Škola Top Drive Gold - Vozila</title>
        <meta
          name='description'
          content='Auto Škola Top Drive Gold raspolaže vozilima mladjih generacija za lakše učenje naših polaznika. Isto tako vozila su birana da	početnici na najbolji način savladaju komande u voznji.'
        />
        <link rel='icon' href={favicon.src} />
      </Head>
      <Bck title='Vozila' />
      <div className='my-32 sm:my-28'>
        <div className='w2'>
          <div className='flex md:flex-col-reverse'>
            <div className='w-[500px] mr-14 lg:flex-1 md:mt-5 sm:w-10/12 xs:w-11/12'>
              <Image src={image1.src} triangleColor='!border-x-[#fff]' />
            </div>
            <h2 className='section-title lg:flex-1'>Volkswagen Golf</h2>
          </div>
          <div className='flex mt-14 md:flex-col-reverse'>
            <div className='w-[500px] mr-14 lg:flex-1 md:mt-5 sm:w-10/12 xs:w-11/12'>
              <Image src={image2.src} triangleColor='!border-x-[#fff]' />
            </div>
            <h2 className='section-title lg:flex-1'>Škoda Fabia</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vozila;
