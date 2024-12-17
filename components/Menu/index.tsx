'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Menu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [open, setOpen] = useState(false);
  const menuView = open ? 'openMenu' : 'closedMenu';

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
    <div className={`menu ${menuView}`}>
      <div className='logoContainer'>
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
      </div>
      <Image
        className='burgerMenu'
        src={open ? '/images/cross.png' : '/images/burger-white.png'}
        alt='burger-menu'
        width={50}
        height={50}
        onClick={() => setOpen((prev) => !prev)}
      />
      <div className='menuItems'>
        <div className='menuLinks'>
          <Link href='#intro'>Om Americanto</Link>
          <Link href='#gallery'>Galleri</Link>
          <Link href='#conductors'>Våra Dirigenter</Link>
          <Link href='#singers'>Våra Sångare</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
