import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
      <Head>
        function MyApp({ Component, pageProps }) {
        useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-WZB2RR6L' });
        }, []);
        return <Component {...pageProps}/>
      </Head>
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
