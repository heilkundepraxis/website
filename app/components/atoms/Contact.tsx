import clsx from 'clsx';

import { EMAIL_ADDRESS, PHONE_NUMBER } from '@app/config';

type Props = {
  color?: string;
};

const Contact = ({ color }: Props) => (
  <>
    {[
      { type: 'tel', href: `tel:${PHONE_NUMBER}`, label: '08641 695 35 39' },
      {
        type: 'mail',
        href: `mailto:${EMAIL_ADDRESS}`,
        label: EMAIL_ADDRESS,
      },
    ].map((contact) => (
      <div key={contact.type} className="flex gap-4">
        <div className="flex-none w-11">{contact.type}:</div>
        <div className="flex-1">
          <a href={contact.href} className={clsx('underline', color || 'text-primary-500')}>{contact.label}</a>
        </div>
      </div>
    ))}
  </>
);

export default Contact;
