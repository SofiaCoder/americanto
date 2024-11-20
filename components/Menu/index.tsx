import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className='z-50 bg-transperent flex justify-between h-20 items-center px-8 fixed left-0 right-0 top-0'>
      <Image
        src='/images/americantoLogo2.svg'
        alt='americanto logo'
        width={180}
        height={180}
      />
      <div className='flex gap-4'>
        <Link href='#hero'>Top</Link>
        <Link href='#intro'>Intro</Link>
        <Link href='/'>Link 3</Link>
        <Link href='/'>Link 4</Link>
      </div>
    </div>
  );
};

export default Menu;
