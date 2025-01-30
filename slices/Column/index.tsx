import Bounded from '@/components/Bounded';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Column`.
 */
export type ColumnProps = SliceComponentProps<Content.ColumnSlice>;

/**
 * Component for "Column" Slices.
 */
const Column = ({ slice }: ColumnProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      {slice.primary.items.map((item, index) => (
        <div key={index}>
          <PrismicNextLink field={item.link}>
            <PrismicRichText field={item.text} />
          </PrismicNextLink>
        </div>
      ))}
    </Bounded>
  );
};

export default Column;
