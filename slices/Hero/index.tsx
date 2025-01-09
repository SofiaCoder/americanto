import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id='hero'
      className='flex flex-col items-center'
      data-section-class='even-section-bg'
    >
      <Heading as='h1' size='xl' className='mb-10 slide-in-top'>
        {slice.primary.title}
      </Heading>
      <div className='flex items-center slide-in-bottom'>
        <p className='-rotate-90 -mr-16 m-0 w-52 h-3 text-center'>
          {slice.primary.left_text}
        </p>
        <div className='h-[50vh] relative aspect-[4/3] w-[70vw]'>
          <Image
            src='/images/choir.jpg'
            alt='choir singing'
            fill
            className='object-cover absolute'
          />
        </div>
        <p className='rotate-90 -ml-16 m-0 w-52 h-3 text-center'>
          {slice.primary.right_text}
        </p>
      </div>
    </Bounded>
  );
};

export default Hero;
