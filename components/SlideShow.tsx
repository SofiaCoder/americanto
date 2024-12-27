'use client';
import React from 'react';
import { FC } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';

interface SlideShowProps {
  images: string[];
}

const zoomInProperties = {
  duration: 5000,
  transitionDuration: 300,
  infinity: true,

  prevArrow: (
    <div className='ml-10'>
      <ArrowLeftIcon className='h-8 w-8 text-white cursor-pointer' />
    </div>
  ),
  nextArrow: (
    <div className='mr-10'>
      <ArrowRightIcon className='h-8 w-8 text-white cursor-pointer' />
    </div>
  ),
};
const SlideShow: FC<SlideShowProps> = ({ images }) => {
  return (
    <div className='w-[80vw]'>
      <Fade {...zoomInProperties}>
        {images.map((img: string, index: number) => (
          <div
            key={index}
            className='flex justify-center md:items-center items-start h-[75vh] w-[80vw] rounded-2xl relative'
          >
            <Image
              src={img}
              alt='image'
              fill
              className='object-cover absolute rounded-2xl'
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideShow;
