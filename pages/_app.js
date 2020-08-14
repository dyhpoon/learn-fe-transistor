import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Transistor FM</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
