import Link from 'next/link';

import { OWNER_NAME } from '@app/config';
import Logo from '@components/atoms/Logo';

const Header = () => (
  <header className="z-30 px-4 sm:px-10 md:px-20 lg:px-4 pt-4 pb-6 sm:py-10">
    <Link href="/" className="no-underline">
      <p className="text-xl sm:text-4xl text-primary-500 font-bold">{OWNER_NAME}</p>
      <p className="text-sm sm:text-2xl tracking-wider text-dark-950 dark:text-dark-50 tracking-wide font-normal">Heilpraktikerin & Physiotherapeutin</p>
    </Link>
    <div className="relative h-16 sm:h-24 mt-4 sm:mt-10">
      <div className="h-1 sm:h-1.5 absolute -left-4 -right-4 top-6 sm:top-7 bg-primary-500 z-30" />
      <div className="h-1 sm:h-1.5 absolute -left-4 -right-4 top-[1.875rem] sm:top-[2.375rem] bg-secondary-500" />
      <div className="absolute z-40 text-center left-0 right-0 top-0">
        <Logo />
      </div>
    </div>
  </header>
);

export default Header;
