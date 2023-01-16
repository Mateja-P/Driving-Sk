import Head from 'next/head';
import Bck from '../Components/Bck';
import Button from '../Components/Button';
import { call } from '../Components/exports';
import favicon from '../Images/Others/favicon.png';

const cenovnik = ({ position }) => {
  return (
    <div>
      <Head>
        <title>Auto Škola Top Drive Gold - Cenovnik</title>
        <meta
          name='description'
          content='Upoznajte se sa cenovnikom Auto Škole Top Top Drive Gold.'
        />
        <link rel='icon' href={favicon.src} />
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
                70,000 din
              </div>
              <div className='lg-text py-3 border-gray-100 border inter'>
                Teorijska obuka 40 časova cena 14.000,00 dinara
              </div>
              <div className='lg-text py-3 border-gray-100 border inter'>
                Teorijski ispit 4.000,00
              </div>
              <div className='lg-text py-3 border-gray-100 border inter'>
                Praktična obuka 40.000,00 cena 48.000,00 dinara
              </div>
              <div className='lg-text py-3 border-gray-100 border inter'>
                Praktični ispit 4.000,00 dinara
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
