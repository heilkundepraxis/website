import Image from 'next/image';

import image from '@/public/images/logo.png';
import { OWNER_NAME } from '@app/config';

const Logo = () => (
  <Image
    src={image}
    alt={`Heilkundepraxis ${OWNER_NAME}`}
    className="w-16 sm:w-24 inline-block"
    priority
  />
);

export default Logo;
