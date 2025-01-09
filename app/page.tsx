// import Conductors from '@/components/Conductors';
// import Gallery from '@/components/Gallery';
// import Hero from '@/components/Hero';
// import Intro from '@/components/Intro';
// import ScrollObserver from '@/components/ScrollObserver';
// import Singers from '@/components/Singers';

import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('home');

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('home');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

// export default function Home() {
//   return (
//     <>
//       <ScrollObserver />
//       <main>
//         <Hero />
//         <Intro />
//         <Gallery />
//         <Conductors />
//         <Singers />
//       </main>
//     </>
//   );
//}
