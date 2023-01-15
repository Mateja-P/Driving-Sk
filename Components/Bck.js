const Bck = ({ title }) => {
  return (
    <div className="relative bg-[url('../Images/Others/pages_bck.jpg')] flex items-center justify-center bg-cover bg-right-top py-24 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.65)] sm:py-20">
      <p className='sm:text-3xl relative text-white z-10 text-4xl font-semibold'>
        {title}
      </p>
    </div>
  );
};

export default Bck;
