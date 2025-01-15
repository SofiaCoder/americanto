import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Singers`.
 */
export type SingersProps = SliceComponentProps<Content.SingersSlice>;

/**
 * Component for "Singers" Slices.
 */
const Singers = ({ slice }: SingersProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for singers (variation: {slice.variation}) Slices
    </section>
  );
};

export default Singers;
