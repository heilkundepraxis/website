import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  dense?: boolean;
  first?: boolean;
  id: string;
};

const PageSection = ({ children, first, id }: Props) => (
  <section id={id} className={clsx(!first && 'pt-10')}>
    {children}
  </section>
);

export default PageSection;
