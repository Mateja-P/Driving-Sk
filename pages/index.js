import Head from 'next/head';
import Image from '../Components/Image';
import Button from '../Components/Button';
import Slide from '../Components/Slide';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { call } from '../Components/exports';
import Card from '../Components/Card';

import circledText from '../Images/Others/circled_text.png';
import decoration from '../Images/Others/decoration.png';
import hero1 from '../Images/Home/1Hero/hero1.jpg';
import hero2 from '../Images/Home/1Hero/hero2.png';
import scImg1 from '../Images/Home/2section/image1_2.png';
import scImg2 from '../Images/Home/2section/image2_2.png';
import blCall from '../Images/Others/call-bl.svg';
import blLocation from '../Images/Others/location-bl.svg';
import vozackaImg from '../Images/Home/3section/image1.jpeg';
import lokacijaImg from '../Images/Home/3section/image2.png';
import carImg from '../Images/Home/3section/image3.jpg';
import frImg from '../Images/Home/4section/image1.jpg';
import greenArrowImg from '../Images/Others/arrow2.png';
import ftImg from '../Images/Home/5section/image1.png';
import leftarrowImg from '../Images/Home/5section/left_arrow.png';
import rightarrowImg from '../Images/Home/5section/right_arrow.png';
import upisImg from '../Images/Home/5section/upis.png';
import prakticniImg from '../Images/Home/5section/prakticni_deo.png';
import teorijskiImg from '../Images/Home/5section/teorijski_deo.png';
import favicon from '../Images/Others/favicon.png';

export default function Home({ position }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Auto Škola Top Drive Gold - Početna</title>
        <meta
          name='description'
          content='Auto Škola Top Drive Gold je novootvorena auto škola u Resniku i naš cilj je da polazinicima prenesemo teorisko i prakticno znanje tako 	da efikanso i po konkuretnoj ceni mogu doći do vozačke dozvole koju žele.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href={favicon.src} />
      </Head>

      {/* HERO */}
      <div className='bg-[#FAFAFA] py-20 pb-10 relative overflow-hidden md:py-10'>
        <div className='h-[200px] w-[50px] absolute right-[10px] top-[-90px] z-[2] rotate-[-35deg] bg-black sm:hidden'></div>
        <div className='w2'>
          <Slide
            settings={{
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              pauseOnHover: true,
              autoplay: true,
              autoplaySpeed: 3500,
              arrows: false,
              afterChange: (e) => {
                setActiveSlide(e);
              },
            }}
          >
            <div className='!flex justify-between items-center gap-10 md:flex-col md:items-start px-2'>
              <div>
                <h1 className='capitalize hero-title'>Minimalna cena obuke</h1>
                <p className='text-[#87888D] inter mt-2 mb-10 lg:text-sm'>
                  Našim polaznicima je zagarontavana minimalna cena obuke.
                </p>
                <div className='my-4'>
                  <Button onClick={() => router.push('/cenovnik')}>
                    procitaj više
                  </Button>
                </div>
              </div>
              <div className='md:flex md:w-full md:justify-center'>
                <div className='hero-img'>
                  <Image src={hero1.src} triangleColor='border-x-[#fafafa]' />
                </div>
              </div>
            </div>
            <div className='!flex justify-between items-center gap-10 md:flex-col md:items-start px-2'>
              <div>
                <h1 className='capitalize hero-title'>
                  Nova Auto Škola u Resniku
                </h1>
                <p className='text-[#87888D] inter mt-2 mb-10 lg:text-sm'>
                  Možete nas naći na dobro poznatoj lokaciji u Resniku.
                </p>
                <div className='flex gap-3 xs:inline-flex xs:flex-col xs:text-center xs:!items-start xs:gap-10 my-4'>
                  <Button direction={true}>prikaži najkraću putanju</Button>
                  <Button onClick={() => router.push('/lokacija')}>
                    procitaj više
                  </Button>
                </div>
              </div>
              <div className='md:flex md:w-full md:justify-center'>
                <div className='hero-img'>
                  <Image src={hero2.src} triangleColor='border-x-[#fafafa]' />
                </div>
              </div>
            </div>
          </Slide>
          <div className='relative flex justify-end mt-20 gap-5 md:mt-10'>
            <div className='absolute left-[-70px] top-[-50px] xl:left-0 md:top-[-25px]'>
              <img className='w-[110px]' src={circledText.src} />
            </div>
            <div className='absolute left-1/4 bottom-0 md:hidden'>
              <img src={decoration.src} />
            </div>
            <div
              className={`transition-all duration-300 ease-in cursor-pointer py-2 px-3 ${
                activeSlide == '0'
                  ? 'bg-green text-white'
                  : 'bg-[#F2F2F2] text-black'
              }`}
            >
              01
            </div>
            <div
              className={`transition-all duration-300 ease-in cursor-pointer py-2 px-3 ${
                activeSlide == '1'
                  ? 'bg-green text-white'
                  : 'bg-[#F2F2F2] text-black'
              }`}
            >
              02
            </div>
          </div>
        </div>
      </div>

      {/* 2 SECTION */}
      <div className='py-20'>
        <div className='w1 flex justify-between md:flex-col'>
          <div>
            <div>
              <h1 className='section-title mb-10 w-4/5 sm:w-full'>
                Auto Škola Top Drive Gold kao deo vaše sigurnosti na putu
              </h1>
              <div className='flex'>
                <div className='h-[380px] w-[500px] lg:hidden'>
                  <Image
                    src={scImg1.src}
                    num={true}
                    triangleColor='!border-x-[#fff]'
                  />
                </div>
                <div className='px-5 lg:px-0 md:mb-10'>
                  <h2 className='mb-5 font-medium text-[18px]'>
                    Prava ponuda za naše polaznike
                  </h2>
                  <p className='inter lg-text'>
                    Top Drive Gold je novootvorena auto škola u Resniku i naš
                    cilj je da polazinicima prenesemo teorisko i prakticno
                    znanje tako da efikanso i po konkuretnoj ceni mogu doći do
                    vozačke dozvole koju žele.
                  </p>
                  <br />
                  <p className='inter lg-text'>
                    Biće nam drago ukoliko se odlučite da nama poklonite
                    poverenje i sa naše strane daćemo sve od sebe da vas zaista
                    osposobimo za samostalno i bezbedno učestvovanje u
                    saobraćaju.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='h-[440px] w-[340px] 2xl:w-[220px] 2xl:h-[auto]'>
              <Image
                src={scImg2.src}
                num={true}
                triangleColor='!border-x-[#fff]'
              />
            </div>

            <div className='mt-10'>
              <div>
                <a
                  target='_blank'
                  href='https://www.google.com/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D1%80+%D0%B7%D0%B0+%D0%BE%D0%B1%D1%83%D0%BA%D1%83+%D0%B2%D0%BE%D0%B7%D0%B0%D1%87%D0%B0+,,Top+Drive+Gold%22/@44.7124501,20.4610483,19z/data=!3m1!4b1!4m5!3m4!1s0x475a738ed6e58577:0xa56d3b649b9a958!8m2!3d44.7124491!4d20.4615968?authuser=3'
                  className='flex cursor-pointer items-center'
                >
                  <img className='w-[20px] mr-2' src={blLocation.src} />
                  <div className='uppercase font-medium text-sm'>
                    Prikaži najkraću putanju
                  </div>
                </a>
              </div>
              <div
                onClick={() => call()}
                className='flex cursor-pointer mt-3 items-center'
              >
                <img className='w-[20px] mr-2' src={blCall.src} />
                <div className='uppercase font-medium text-sm'>Pozovi nas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 SECTION */}
      <div className='bg-pr-black py-20'>
        <div className='w2'>
          <h1 className='text-white section-title text-center mb-10'>
            Auto Škola Top Drive Gold
          </h1>
          <div className='flex justify-between gap-32 2xl:gap-5 md:flex md:flex-col md:items-center md:gap-10'>
            <Card
              href='/kako-do-vozacke'
              img={vozackaImg.src}
              text='Naš cilj je da na brz i lak način dođete do vozačke dozvole. Pogledajte kojih su to 5 koraka koji vas čekaju na tom putu.'
              title='Kako do vozačke dozvole'
            />
            <Card
              href='/lokacija'
              img={lokacijaImg.src}
              text='Top Drive Gold možete naći na adresi Edvarda Griga 7 u Resniku ili možete pozvati preko telefona +381658701773.'
              title='Lokacija'
            />
            <Card
              href='/vozila'
              img={carImg.src}
              text='Raspolažemo vozilima mladjih generacija za lakše učenje naših polaznika. Isto tako vozila su birana da početnici na najbolji način savladaju komande u voznji.'
              title='Vozila'
            />
          </div>
        </div>
      </div>

      {/* 4 SECTION */}
      <div className='relative'>
        <div className='flex md:flex-col'>
          <div className='flex-1 flex flex-col justify-start items-center relative p1'>
            <div className='pr-10 pb-28 p2 lg:pb-16'>
              <h1 className='section-title'>
                Velika prolaznost na testovima je rezultat našeg uspešnog
                početka
              </h1>
              <p className='lg-text mt-10 mb-16'>
                90% naših polaznika je položilo testove iz prve. To je samo
                jedan od pokazatelja našeg pristupa ovom poslu i polaznicima.
              </p>
              <div className='my-4'>
                <Button onClick={() => router.push('/kako-do-vozacke')}>
                  kako do vozačke
                </Button>
              </div>
            </div>
            <img
              className='absolute bottom-[140px] left-[30px] 2xl:bottom-[100px] fd lg:bottom-[40px]'
              src={decoration.src}
            />
          </div>
          <div className='flex-1'>
            <div className='relative after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-[rgba(0,0,0,0.65)] h-full'>
              <img className='h-full sm:h-[250px] sm:w-full' src={frImg.src} />
            </div>
          </div>
        </div>
        <div className='hidden lg:block bg-black w-full py-3'>
          <Slide
            settings={{
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows: false,
              responsive: [
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
              ],
            }}
          >
            <div className='!flex items-center capitalize justify-center'>
              <img src={greenArrowImg.src} />
              <p className='inter__italic text-white ml-3 text-lg xl:text-base md:text-sm'>
                Iskusni instruktori
              </p>
            </div>
            <div className='!flex items-center capitalize justify-center'>
              <img src={greenArrowImg.src} />
              <p className='inter__italic text-white ml-3 text-lg xl:text-base md:text-sm'>
                Novi automobili
              </p>
            </div>
            <div className='!flex items-center capitalize justify-center'>
              <img src={greenArrowImg.src} />
              <p className='inter__italic text-white ml-3 text-lg xl:text-base md:text-sm'>
                Napredne vozačke tehnike
              </p>
            </div>
            <div className='!flex items-center capitalize justify-center'>
              <img src={greenArrowImg.src} />
              <p className='inter__italic text-white ml-3 text-lg xl:text-base md:text-sm'>
                auto škola sa 5 zvezdica
              </p>
            </div>
            <div className='!flex items-center justify-center'>
              <img src={greenArrowImg.src} />
              <p className='inter__italic text-white capitalize ml-3 text-lg xl:text-base md:text-sm'>
                Opširno teorijsko znanje
              </p>
            </div>
          </Slide>
        </div>
        <div className='flex absolute left-0 bottom-0 w-full py-5 justify-around lg:hidden'>
          <div className='absolute h-full w-1/2 bg-black left-0 top-0 z-[-1]'></div>
          <div className='flex items-center capitalize'>
            <img src={greenArrowImg.src} />
            <p className='inter__italic text-white ml-3 text-lg xl:text-base'>
              Iskusni instruktori
            </p>
          </div>
          <div className='flex items-center capitalize'>
            <img src={greenArrowImg.src} />
            <p className='inter__italic text-white ml-3 text-lg xl:text-base'>
              Novi automobili
            </p>
          </div>
          <div className='flex items-center capitalize'>
            <img src={greenArrowImg.src} />
            <p className='inter__italic text-white ml-3 text-lg xl:text-base'>
              Napredne vozačke tehnike
            </p>
          </div>
          <div className='flex items-center capitalize'>
            <img src={greenArrowImg.src} />
            <p className='inter__italic text-white ml-3 text-lg xl:text-base'>
              auto škola sa 5 zvezdica
            </p>
          </div>
          <div className='flex items-center'>
            <img src={greenArrowImg.src} />
            <p className='inter__italic text-white capitalize ml-3 text-lg xl:text-base'>
              Opširno teorijsko znanje
            </p>
          </div>
        </div>
      </div>

      {/* 5 SECTION */}
      <div className='py-40 sm:py-20'>
        <div className='flex w2 gap-10 md:flex-col'>
          <div className='flex-[0.7] flex flex-col justify-between lg:justify-evenly'>
            <h1 className='section-title'>Započni proces</h1>
            <p className='lg-text mt-3 mb-6'>
              Ceo proces od upisivanja do dobijanja vozacke dozvole se sastoji
              iz teorijskog i praktičnog dela. Oba traju po 40 casova a po
              zavrsetku imaćete priliku da položite završni ispit ili polaganje.
              Na kraju vas čeka dugo željena vozačka dozvola.
            </p>
            <img className='w-full md:w-1/2 sm:w-full' src={ftImg.src} />
          </div>
          <div className='flex-1 flex flex-col justify-between'>
            <div className='flex gap-5'>
              <div className='relative'>
                <img className='xs:w-[40px]' src={upisImg.src} />
                <h3 className='text-xl font-medium mt-1 mb-2 xs:text-md'>
                  Upis
                </h3>
                <p className='lg-text'>
                  Tokom upisa razgovaramo o procesu vašeg školovanja. Nalazimo
                  zajednička rešenja koja bi vam školovanje učinilo znatno
                  lakše.
                </p>
                <div className='absolute top-[-20px] right-0 shadow-text'>
                  01
                </div>
              </div>
              <div className='flex items-center'>
                <img src={rightarrowImg.src} />
              </div>
            </div>
            <div>
              <div className='flex relative gap-5 sm:my-5'>
                <div className='flex items-center'>
                  <img className='w-[190px]' src={leftarrowImg.src} />
                </div>
                <div>
                  <img className='xs:w-[40px]' src={teorijskiImg.src} />
                  <h3 className='text-xl font-medium mt-1 mb-2 xs:text-md'>
                    Teorijski deo
                  </h3>
                  <p className='lg-text'>
                    U teorijskom delu polaznici uče o osnovama u saobraćuju i
                    svim neizbeznim informacijama koje su vezane za njega.
                    Polaznik ima 40 časova teorije pre nego sto izadje na
                    teorijski ispit.
                  </p>
                </div>
                <div className='absolute top-[-20px] right-0 shadow-text'>
                  02
                </div>
              </div>
            </div>
            <div>
              <div className='relative w-2/3 lg:w-full'>
                <img className='xs:w-[40px]' src={prakticniImg.src} />
                <h3 className='text-xl font-medium mt-1 mb-2 xs:text-md'>
                  Praktični deo
                </h3>
                <p className='lg-text'>
                  Po završetku teorijskog ispita, polaznik prelazi na poligon.
                  Tu stičete osecaj za volanom i komande vozila, tako da za
                  veoma kratko vreme prelazimo na realan saobracaj. Polaznik ima
                  40 časova pre nego što izadje na polaganje.
                </p>
                <div className='absolute top-[-20px] right-0 shadow-text'>
                  03
                </div>
              </div>
            </div>
            <div>
              <div className='mt-10 flex gap-10'>
                <Button direction={true}>prakaži putanju</Button>
                <Button onClick={() => call()}>pozovi</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
