'use client';
import Link from 'next/link';
import Image from 'next/image';
import DropdownMenu from '@/components/header/ProfileMenu';

import { useState } from 'react';

import { icons, navbarLinks } from '@/constants/index';
import { usePathname } from 'next/navigation';
import { useAuthContext } from '@/actions/AuthProvider';
import { Button } from '../ui/button';

const Header = () => {
  const { user } = useAuthContext();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };
  const pathname = usePathname();
  return (
    <nav className='w-full bg-white dark:bg-gray-900 fixed z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center rtl:space-x-reverse'>
          <Image
            priority
            className='h-8'
            src={icons.logo.src}
            width={120}
            height={60}
            alt={icons.logo.alt}
          />
        </Link>
        <div className='w-[120px] flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse '>
          {user.user !== null ? (
            <div className='h-8'>
              <DropdownMenu user={user} />
            </div>
          ) : (
            <Link className='h-8' href='/login'>
              <Button className='h-8'>Login</Button>
            </Link>
          )}

          <button
            onClick={() => toggleNavigation()}
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          >
            <span className='sr-only'>Open main menu</span>
            <Image
              src={`${openNavigation ? icons.close.src : icons.menu.src}`}
              alt='menu'
              width={30}
              height={30}
            />
          </button>
        </div>
        <div
          className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
            openNavigation ? '' : 'hidden'
          }`}
          id='navbar-sticky'
        >
          <div className='flex flex-col md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {navbarLinks.map((link) => {
              return (
                <Link
                  key={link.title}
                  href={link.path}
                  className={` flex justify-center align-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 `}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
