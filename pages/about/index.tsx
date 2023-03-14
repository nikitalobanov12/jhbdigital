import Head from "next/head";
import Hero from "@/app/components/abouthero";
import Footer from "@/app/components/footer";

export default function Index() {
  return (
    <div className="bg-background">
      <Head>
        <title>JHB Digital</title>
        <meta name="description" content="Short form social media marketing agency for B2B Coaches, Consultants, and agencies. Skyrocket your inbound lead generation with short form content." />
      </Head>
      <Hero></Hero>
      <Footer></Footer>
    </div> 
  );
}
