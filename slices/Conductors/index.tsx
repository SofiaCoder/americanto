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

const conductorBox =
  'relative h-[60vw] w-[60vw] lg:h-[40vh] lg:w-[40vw] flex items-end rounded-xl mt-6';
const conductorImage =
  'object-cover absolute h-[60vw] w-[60vw] lg:h-[40vh] lg:w-[40vw] hover:opacity-25 hover:ease-in duration-100 rounded-xl';
const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Paragraph size='md' className='p-4'>
      {children}
    </Paragraph>
  ),
};

/**
 * Props for `Conductors`.
 */
export type ConductorsProps = SliceComponentProps<Content.ConductorsSlice>;

/**
 * Component for "Conductors" Slices.
 */
const Conductors = ({ slice }: ConductorsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id='conductors'
      data-section-class='odd-section-bg'
    >
      <Heading as='h2' size='lg' className='slide-in-top'>
        {slice.primary.title}
      </Heading>
      <div className='flex flex-col mt-10 items-center lg:flex-row'>
        {slice.primary.conductor.map((item, index) => (
          <div key={index} className='m-10 slide-in-bottom'>
            <Heading as='h3' size='md'>
              {item.name}
            </Heading>
            <div className={conductorBox}>
              <PrismicNextImage field={item.image} className={conductorImage} />
              <PrismicRichText field={item.about} components={components} />
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Conductors;
