import Image from 'next/image';
import React from 'react';

interface SingerBoxProps {
  name: string;
  imgPath: string;
  text?: string;
}

const SingerBox: React.FC<SingerBoxProps> = ({ name, imgPath, text }) => {
  return (
    <div className='h-[20vh] relative aspect-[4/3] w-[20vh] flex rounded-xl mt-6'>
      <div className='flex flex-col gap-3'>
        <h4>{name}</h4>
        {text && <p>{text}</p>}
      </div>
      <Image
        src={imgPath}
        alt='picture of singer'
        fill
        className='object-cover absolute hover:opacity-25 hover:ease-in duration-100 rounded-xl'
      />
    </div>
  );
};

export default SingerBox;
