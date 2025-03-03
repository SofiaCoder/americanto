'use client';
import React from 'react';
import { FC } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PrismicNextImage } from '@prismicio/next';
import { ImageField } from '@prismicio/client';

interface SlideShowProps {
  images: { image: ImageField }[];
}
const zoomInProperties = {
  duration: 5000,
  transitionDuration: 300,
  infinity: true,

  prevArrow: (
    <div className='ml-6 md:ml-10'>
      <ArrowLeftIcon className='h-5 w-5 md:h-8 md:w-8 text-white cursor-pointer' />
    </div>
  ),
  nextArrow: (
    <div className='mr-6 md:mr-10'>
      <ArrowRightIcon className='h-5 w-5 md:h-8 md:w-8 text-white cursor-pointer' />
    </div>
  ),
};
const SlideShow: FC<SlideShowProps> = ({ images }) => {
  return (
    <div className='w-full rounded-2xl'>
      <Fade {...zoomInProperties}>
        {images.map((item, index: number) => (
          <div
            key={index}
            className='flex justify-center md:items-center items-start h-[40vh] md:h-[50vh] w-full lg:h-[75vh] '
          >
            <PrismicNextImage
              field={item.image}
              className='h-[40vh] md:h-[50vh] w-full lg:h-[75vh] rounded-2xl'
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideShow;
