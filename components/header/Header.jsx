'use client';
import Link from 'next/link';
import Image from 'next/image';
// import ProfileMenu from './ProfileMenu';

import { useState } from 'react';

import { icons, navbarLinks } from '@/constants/index';
import { usePathname } from 'next/navigation';
import { useAuthContext } from '@/actions/AuthProvider';

const Header = () => {
  const styles = {};
  const [visible, setVisible] = useState(false);
  const { user } = useAuthContext();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 w-full  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <Link className='block w-[12rem] xl:mr-8 relative p-4' href='/'>
          <Image
            priority
            className='object-contain '
            src={icons.logo.src}
            width={120}
            height={60}
            alt={icons.logo.alt}
          />
        </Link>
        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8/70 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
          {navbarLinks.slice(0, 4).map((link) => (
            <Link
              className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
              px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                link.path === pathname
                  ? 'z-2 lg:text-n-1'
                  : 'lg:text-n-1/50'
              } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              key={link.title}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
          </div>
        </nav>
        <div className='flex flex-col'>
          {user.user !== null ? (
            <div onClick={() => toggleMenu()} className={styles.dropdown}>
              <Image
                priority
                className={styles.userImage}
                src={user.photoURL}
                width={220}
                height={60}
                alt={user.displayName}
              />
              {visible && (
                <div className={styles.options}>
                  {/* <ProfileMenu
                  name={user.displayName}
                  email={user.email}
                  image={user.photoURL}
                /> */}
                </div>
              )}
            </div>
          ) : (
            <div className='flex flex-row'>
              <Link
                className='button  mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'
                href='/login'
              >
                Login
              </Link>
              <Link
                className='button  mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'
                href='/register'
              >
                Register
              </Link>
            </div>
          )}
        </div>

        <div
          onClick={() => toggleNavigation()}
          className='cursor-pointer ml-auto lg:hidden '
        >
          <Image
            src={`${openNavigation ? icons.close.src : icons.menu.src}`}
            alt='menu'
            width={20}
            height={20}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
