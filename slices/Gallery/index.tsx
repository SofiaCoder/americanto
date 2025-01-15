import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import SlideShow from '@/components/SlideShow';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  const images = slice.primary.images;
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id='gallery'
      data-section-class='even-section-bg'
    >
      <Heading as='h2' size='lg' className='mb-10 slide-in-top'>
        {slice.primary.title}
      </Heading>
      <div className='flex justify-center slide-in-right'>
        <SlideShow images={images} />
      </div>
    </Bounded>
  );
};

export default Gallery;
