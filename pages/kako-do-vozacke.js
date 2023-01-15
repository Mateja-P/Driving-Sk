import React from 'react';
import Bck from '../Components/Bck';
import Head from 'next/head';

import tnImg from '../Images/Kako_do_vozacke/teorijska_nastava.png';
import tiImg from '../Images/Kako_do_vozacke/teorijski_ispit.png';
import poImg from '../Images/Kako_do_vozacke/prakticna_obuka.png';
import piImg from '../Images/Kako_do_vozacke/prakticni_ispit.png';
import dlImg from '../Images/Home/3section/image1.jpeg';
import favicon from '../Images/Others/favicon.png';

const vozacka = () => {
  return (
    <div>
      <Head>
        <title>Auto Škola Top Drive Gold - Kako do vozačke</title>
        <meta
          name='description'
          content='Auto Škola Top Drive Gold vam pretstavlja 5 koraka kako da dodjete do svoje željene vozačke.'
        />
        <link rel='icon' href={favicon.src} />
      </Head>
      <Bck title='Kako do vozačke' />
      <div className='my-32 sm:my-28'>
        <div className='w1'>
          <div className='my-14'>
            <h3 className='section-title'>1. Teorijska nastava</h3>
            <img className='my-5 w-[400px] xs:w-11/12' src={tnImg.src} />
            <p className='lg-text'>
              Teorijska nastava sadži 40 časova. Kandidat u toku jednog dana
              može prisustvovati najviše na 3 časa. Pauze između časova su 10
              minuta. Predviđeno vreme za održavanje svih 40 časova je oko 20
              dana.
            </p>
          </div>
          <div className='my-14'>
            <h3 className='section-title'>2. Teorijski ispit</h3>
            <img className='my-5 w-[400px] xs:w-11/12' src={tiImg.src} />
            <p className='lg-text'>
              Prijava teorijskog ispita vrši se po završetku teorijske nastave,
              a osam dana pre održavanja ispita. Ispit se polaže u prostorijama
              auto škole na računarima primenom informatičkog sistema
              ministarstva unutrašnjih poslova. Kandidat se prijavljuje u
              aplikaciji za ispit i po završetku ispita sistem izbacije poruku o
              rezultatu ispita. Za uspešno položen teorijski ispit potrebno je
              85% tačnih odgovora. Trajanje teorijskog ispita ograničeno je na
              45 minuta. Kandidat može videti kompletan izvestaj (pitanja i
              odgovore) sa ispita u istoj aplikaciji prijavom sa bilo kog
              računara nakon završetka ispita. Položen teorijski ispit važi 18
              meseci.
            </p>
          </div>
          <div className='my-14'>
            <h3 className='section-title'>3. Praktična obuka</h3>
            <img className='my-5 w-[400px] xs:w-11/12' src={poImg.src} />
            <p className='lg-text'>
              Praktična obuka podrazumeva 40 časova vožnje od toga prva dva časa
              na poligonu, a ostali časovi u saobraćaju i po potrebi na
              poligonu. Uslov za praktičnu obuku je: <br />- Potvrda o položenom
              teorijskom ispitu <br /> - Lekarsko uverenje - Važeća lična karta
            </p>
          </div>
          <div className='my-14'>
            <h3 className='section-title'>4. Praktični ispit</h3>
            <img className='my-5 w-[400px] xs:w-11/12' src={piImg.src} />
            <p className='lg-text'>
              Polaže se na unapred određenim trasama, informatički system MUP-a
              slučajnim izborom dodeljuje broj trase kandidatu neposredno pre
              početka ispita. Ispitivač iz auto škole čita pravac kretanja na
              osnovu ispitne trase, a od kandidata se očekuje samostalna i
              bezbedna vožnja u skladu sa pravilima saobraćaja i saobraćajnom
              signalizcijom.
            </p>
          </div>
          <div className='my-14'>
            <h3 className='section-title'>5. Izdavanje vozačke dozvole</h3>
            <img className='my-5 w-[400px] xs:w-11/12' src={dlImg.src} />
            <p className='lg-text'>
              Izdavanje vozačke dozvole vrši ministarstvo unutrašnjih poslova u
              ulici Ljermontova 12, Beograd. Potrebna dokumenta: <br />
              - Uverenje o položenom ispitu <br />
              - Važeće lekarsko uverenje do 6 meseci <br />
              - Uverenje o položenom kursu prve pomoći <br />
              - Plaćene takes za izdavanje vozačke dozvole <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vozacka;
