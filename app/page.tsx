import Conductors from '@/components/Conductors';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Menu from '@/components/Menu';
import ScrollObserver from '@/components/ScrollObserver';
import Singers from '@/components/Singers';

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <main>
        <Menu />
        <Hero />
        <Intro />
        <Gallery />
        <Conductors />
        <Singers />
      </main>
    </>
  );
}
