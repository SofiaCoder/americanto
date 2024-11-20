import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <div className='pt-20 mx-10'>
      <Menu />
      <Hero />
      <Intro />
    </div>
  );
}
