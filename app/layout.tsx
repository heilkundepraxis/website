import clsx from 'clsx';
import type { Metadata } from 'next';

import { OWNER_NAME, WEB_HOST } from '@app/config';
import { clearSans } from '@app/font';
import type { LayoutProps } from '@app/interfaces';
import Footer from '@components/organisms/Footer';
import Header from '@components/organisms/Header';
import Provider from '@components/organisms/Provider';

import '@/css/style.scss';

export const metadata: Metadata = {
  title: {
    template: `%s – Heilkundepraxis ${OWNER_NAME}`,
    default: `Heilkundepraxis ${OWNER_NAME}`,
  },
  description: 'Praxis für Naturheilkunde und Physiotherapie in Unterwössen und Umgebung.',
  metadataBase: new URL(WEB_HOST),
  authors: {
    name: 'Manuel Schächinger',
    url: 'https://www.schaechinger.com',
  },
  openGraph: {
    images: `${WEB_HOST}/images/heilkundepraxis-steil-header-logo.png`,
    siteName: `Heilkundepraxis ${OWNER_NAME}`,
    type: 'website',
    locale: 'de',
  },
};

const RootLayout = async ({ children }: LayoutProps) => (
  <html className={clsx(clearSans.className, 'light')} style={{ colorScheme: 'light' }} lang="de" dir="ltr">
    <head>
      <link type="text/plain" rel="author" href={`${WEB_HOST}/humans.txt`} />
    </head>
    <body className="text-dark-950 dark:text-dark-200 bg-dark-50 dark:bg-dark-800">
      <Provider>
        <div className="w-full max-w-screen-xl mx-auto">
          <Header />

          <div className="px-4 sm:px-10 md:px-20 lg:px-4">
            <main className="min-h-screen">
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
