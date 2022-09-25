import { NextSeo } from 'next-seo';

import '@fontsource/poppins';
import '@fontsource/lato';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="EviateJS"
        description="The next-gen backend framework for bun"
        openGraph={{
          url: 'https://eviate.vercel.app/',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          site_name: 'EviateJS'
        }}
        twitter={{
          handle: '@janaSunrise',
          cardType: 'summary_large_image'
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
