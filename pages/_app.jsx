import '../styles/global.scss';

import Head from 'next/head';

import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Space tourism</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
