import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading as='h3' size='md' className=''>
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as='h4' size='sm' className=''>
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading as='h5' size='xs' className=''>
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading as='h6' size='xxs' className=''>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <Paragraph size='sm'>{children}</Paragraph>,
};

const Footer = async () => {
  const client = createClient();

  const footer = await client.getSingle('footer');
  const data = footer.data;

  return (
    <footer className='flex flex-col gap-5 md:flex-row justify-between pr-6 md:pr-28 bg-red-950 py-10 align-middle'>
      <PrismicNextImage
        field={data.logo}
        className='w-full h-auto md:w-1/5 md:h-1/6'
      />
      {data.slices.map((column, index) => (
        <div key={index} className='ml-6'>
          <PrismicRichText
            field={column.primary.title}
            components={components}
          />
          {column.primary.items.map((item, index) => (
            <div key={index}>
              <PrismicNextLink field={item.link}>
                <PrismicRichText field={item.text} />
              </PrismicNextLink>
            </div>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
