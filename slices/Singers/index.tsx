import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as='h2' size='lg' className='mb-2'>
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as='h3' size='md' className='mb-2'>
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as='h4' size='sm' className='mb-2'>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <Paragraph size='md' className='p-4'>
      {children}
    </Paragraph>
  ),
};

/**
 * Props for `Singers`.
 */
export type SingersProps = SliceComponentProps<Content.SingersSlice>;

/**
 * Component for "Singers" Slices.
 */
const Singers = ({ slice }: SingersProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as='h2' size='lg'>
        {slice.primary.title}
      </Heading>
      <div className='flex flex-col gap-6 md:flex-row mt-10 justify-around'>
        {slice.primary.subgroup.map((item, index) => (
          <div key={index} className=''>
            <PrismicRichText field={item.title} components={components} />
            <PrismicRichText
              field={item.list_of_singers}
              components={components}
            />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Singers;
