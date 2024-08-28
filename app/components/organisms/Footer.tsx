import Link from 'next/link';

import { OWNER_NAME } from '@app/config';

const Footer = () => (
  <footer className="footer mb-6 mt-10 sm:text-left text-sm">
    <ul className="flex justify-start gap-4 my-4">
      <li><Link href="/impressum" className="text-primary-500 font-normal">Impressum</Link></li>
      <li><Link href="/datenschutz" className="text-primary-500 font-normal">Datenschutz</Link></li>
    </ul>

    <p className="footer__copyright mb-2">
      &copy; {new Date().getFullYear()} {OWNER_NAME}. Alle Rechte vorbehalten.
    </p>
  </footer>
);

export default Footer;
