import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as='h2' size='lg' className=''>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <Paragraph size='md'>{children}</Paragraph>,
};

/**
 * Props for `Intro`.
 */
export type IntroProps = SliceComponentProps<Content.IntroSlice>;

/**
 * Component for "Intro" Slices.
 */
const Intro = ({ slice }: IntroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id='intro'
      className='flex flex-col mb-8 lg:flex-row gap-10'
      data-section-class='odd-section-bg'
    >
      <div className='slide-in-top'>
        <PrismicNextImage
          field={slice.primary.image}
          className='drop-shadow-xl max-w-4xl w-full rounded-2xl'
        />
      </div>
      <div className='lg:w-1/2 flex flex-col gap-8 slide-in-bottom'>
        <PrismicRichText field={slice.primary.title} components={components} />
        <PrismicRichText field={slice.primary.phrase} components={components} />
      </div>
    </Bounded>
  );
};

export default Intro;
