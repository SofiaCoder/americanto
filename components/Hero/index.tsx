import Image from 'next/image';

const Hero = () => {
  return (
    <section id='hero' className='flex place-self-center mt-16'>
      <div className=''>
        <h1 className='text-5xl font-bold'>Coro Americanto</h1>
        <div className='relative h-72 w-92 overflow-hidden rounded-lg m-5'>
          <Image
            src='/images/choir.jpg'
            alt='choir singing'
            fill
            className='absolute object-cover object-top'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
