'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Menu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  return (
    <div className='z-50 flex justify-between items-center px-8 fixed left-0 right-0 top-0 menu'>
      <Link href='#hero'>
        <Image
          src={
            isDarkMode ? '/images/logoVit.svg' : '/images/americantoLogo2.svg'
          }
          alt='americanto logo'
          width={250}
          height={250}
        />
      </Link>
      <div className='flex gap-4'>
        <Link href='#intro'>Om Americanto</Link>
        <Link href='#gallery'>Galleri</Link>
        <Link href='#conductors'>Våra Dirigenter</Link>
        <Link href='#singers'>Våra Sångare</Link>
      </div>
    </div>
  );
};

export default Menu;
