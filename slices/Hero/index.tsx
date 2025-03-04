import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';

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
      <div className='flex flex-col md:flex-row items-center slide-in-bottom'>
        <Paragraph
          size='md'
          className='hidden w-52 h-6 grow-0 text-nowrap text-center md:-rotate-90 md:-mr-18 md:block'
        >
          {slice.primary.left_text}
        </Paragraph>
        <PrismicNextImage
          field={slice.primary.hero_image}
          className='h-[40vh] grow rounded-2xl shrink-0 md:h-[50vh] md:w-[65vw] lg:h-[65vh] lg:w-[70vw]'
        />
        <Paragraph
          size='md'
          className='mt-4 w-52 h-6 grow-0 text-nowrap text-center md:mt-0 md:rotate-90 md:-ml-18'
        >
          {slice.primary.right_text}
        </Paragraph>
      </div>
    </Bounded>
  );
};

export default Hero;
