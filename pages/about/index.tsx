import Head from "next/head";
import Hero from "@/app/components/abouthero";
import AboutSection from "@/app/components/aboutsection";


export default function Index() {
  return (
    <>
      <Head>
        <title>JHB Digital</title>
        <meta name="description" content="vins" />
      </Head>
      <Hero></Hero>
    
    </>
  );
}
