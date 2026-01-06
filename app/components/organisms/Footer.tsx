import Link from 'next/link';

import { OWNER_NAME } from '@app/config';

const Footer = () => (
  <footer className="footer mb-6 mt-10 sm:text-left text-sm">
    <ul className="flex justify-start gap-4 my-4">
      <li><Link href="/impressum" className="font-semibold">Impressum</Link></li>
      <li><Link href="/datenschutz" className="font-semibold">Datenschutz</Link></li>
    </ul>

    <p className="footer__copyright mb-2">
      &copy; {new Date().getFullYear()} {OWNER_NAME}.&nbsp;
      <br className="sm:hidden" />Alle Rechte vorbehalten.
    </p>
  </footer>
);

export default Footer;
