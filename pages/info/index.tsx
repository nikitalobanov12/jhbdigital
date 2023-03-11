import Head from "next/head";
import AboutSection from "@/app/components/aboutsection";
import Hero from "@/app/components/infohero";

export default function Index() {
  
  
  return (
    <>
      <Head>
        <title>JHB Digital</title>
        <meta name="description" content="vins" />
      </Head>
      <Hero></Hero>
      <AboutSection></AboutSection>
    </>
  );
}
