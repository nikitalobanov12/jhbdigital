import Head from "next/head";
import Hero from "@/app/components/abouthero";


export default function Index() {
  return (
    <>
      <Head>
        <title>JHB Digital</title>
        <meta name="description" content="Short form social media marketing agency for B2B Coaches, Consultants, and agencies. Skyrocket your inbound lead generation with short form content." />
      </Head>
      <Hero></Hero>
    
    </>
  );
}
