import Image from 'next/image';

import imageLight from '@/public/images/logo.png';
import imageDark from '@/public/images/logo-dark.png';
import { OWNER_NAME } from '@app/config';

const Logo = () => (
  <>
    <Image
      src={imageLight}
      alt={`Heilkundepraxis ${OWNER_NAME}`}
      className="w-16 sm:w-24 inline-block dark:hidden"
      priority
    />
    <Image
      src={imageDark}
      alt={`Heilkundepraxis ${OWNER_NAME}`}
      className="w-16 sm:w-24 hidden dark:inline-block"
      priority
    />
  </>
);

export default Logo;
