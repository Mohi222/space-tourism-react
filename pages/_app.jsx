import '../styles/global.scss';

import Head from 'next/head';

import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>With Linaria</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
