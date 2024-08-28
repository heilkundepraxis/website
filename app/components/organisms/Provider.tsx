'use client';

import { ThemeProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => (
  <ThemeProvider attribute="class" forcedTheme="light">
    { children }
  </ThemeProvider>
);

export default Provider;
