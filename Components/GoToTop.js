import { useEffect, useState, useRef } from 'react';

const GoToTop = ({ endLoc }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsvisible] = useState(false);
  const [phoneView, setPhoneview] = useState(false);
  const [changeStyle, setChangeStyle] = useState(false);
  const goRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPx = document.documentElement.scrollTop;

      const childHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolledVal = (scrollPx / childHeight) * 100;

      setProgress(scrolledVal);
    });
  }, [progress]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let currentScroll = window.scrollY + window.innerHeight;
      if (endLoc !== undefined) {
        if (currentScroll >= endLoc) {
          setChangeStyle(true);
        } else {
          setChangeStyle(false);
        }
      }
    });
  }, [endLoc, changeStyle]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    });
  }, [isVisible]);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setPhoneview(true);
    } else {
      setPhoneview(false);
    }
  }, [phoneView]);

  return (
    <div
      ref={goRef}
      onClick={() => {
        scrollTo(0, 0);
      }}
      className={`z-[990] fixed flex flex-col items-center transition-all duration-200 ease-in-out ${
        isVisible ? 'left-[10px]' : 'left-[-100%]'
      } bottom-[70px] cursor-pointer ${phoneView ? 'hidden' : 'block'} `}
    >
      <div className='w-[3px] h-[70px] bg-black mb-10'>
        <div
          style={{
            width: '100%',
            height: progress + '%',
            backgroundColor: '#5ABDCD',
          }}
        ></div>
      </div>
      <p
        className={`uppercase text-xs rotate-90 ${
          changeStyle ? 'text-white' : 'text-black'
        }`}
      >
        go to top
      </p>
    </div>
  );
};

export default GoToTop;
