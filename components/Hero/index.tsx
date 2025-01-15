import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id='hero'
      className='flex flex-col items-center'
      data-section-class='even-section-bg'
    >
      <h1 className='mb-10 slide-in-top'>Coro Americanto</h1>
      <div className='flex items-center slide-in-bottom'>
        <p className='-rotate-90 mr-8 md:-mr-16 m-0 w-52 h-3 text-center'>
          text text text
        </p>
        <div className='h-[50vh] relative aspect-[4/3] w-[70vw]'>
          <Image
            src='/images/choir.jpg'
            alt='choir singing'
            fill
            className='object-cover absolute'
          />
        </div>
        <p className='rotate-90 -ml-16 m-0 w-52 h-3 text-center'>text text</p>
      </div>
    </section>
  );
};

export default Hero;
