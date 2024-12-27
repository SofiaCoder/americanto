import Image from 'next/image';
import React from 'react';

const Intro = () => {
  return (
    <section
      id='intro'
      className='flex gap-10'
      data-section-class='odd-section-bg'
    >
      <div className='slide-in-top'>
        <Image src='/images/notes.jpg' alt='notes' width={500} height={500} />
      </div>
      <div className='w-1/2 flex flex-col gap-8 slide-in-bottom'>
        <h2 className=''>Om Americanto</h2>
        <p className=''>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          repellendus dicta ad magni suscipit alias assumenda aperiam,
          asperiores blanditiis laboriosam eos est deserunt repellat facilis nam
          aliquam exercitationem adipisci. Totam?
        </p>
      </div>
    </section>
  );
};

export default Intro;
