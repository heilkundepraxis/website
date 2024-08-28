// hosts
export const PROD_HOST = 'https://www.heilkundepraxis-steil.de';
export const WEB_HOST = process.env.NEXT_PUBLIC_WEB_HOST || PROD_HOST;

// address
export const OWNER_NAME = 'Elfriede Steil-Schächinger';
export const STREET_ADDRESS = 'Postweg 4';
export const ADDRESS_CITY = 'Unterwössen';
export const POSTAL_CODE = '83246';

// contact
export const EMAIL_ADDRESS = 'info@heilkundepraxis-steil.de';
export const PHONE_NUMBER = '+4986416953539';

// opening hours
type WeekDay = 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
export const OPENING_HOURS: { day: WeekDay, opens?: string; closes?: string; }[] = [
  { day: 'Mo', opens: '09:00', closes: '19:00' },
  { day: 'Tu', opens: '08:00', closes: '17:00' },
  { day: 'We', opens: '08:00', closes: '12:00' },
  { day: 'Th', opens: '09:00', closes: '19:00' },
  { day: 'Fr' },
];
