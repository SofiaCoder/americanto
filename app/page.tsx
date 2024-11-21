import Conductors from '@/components/Conductors';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Menu from '@/components/Menu';
import Singers from '@/components/Singers';

export default function Home() {
  return (
    <div className='pt-20 mx-20'>
      <Menu />
      <Hero />
      <Intro />
      <Gallery />
      <Conductors />
      <Singers />
    </div>
  );
}
