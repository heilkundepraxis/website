import { 
  ADDRESS_CITY,
  OWNER_NAME,
  POSTAL_CODE,
  STREET_ADDRESS,
} from '@app/config';

type Props = {
  name?: boolean;
};

const Address = ({ name }: Props) => (
  <>
    {name && <>{OWNER_NAME}<br /></>}
    {STREET_ADDRESS}<br />
    {POSTAL_CODE} {ADDRESS_CITY}
  </>
);

export default Address;
