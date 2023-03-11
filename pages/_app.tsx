import "../src/app/globals.css";
import { AppProps } from "next/app";
import Header from "@/app/components/header";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
       <link rel="icon" href="/_next/static/media/metadata/favicon.9ac8e0ee.ico" type="image/x-icon" sizes="any"/>
      </Head>
      <Header></Header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
