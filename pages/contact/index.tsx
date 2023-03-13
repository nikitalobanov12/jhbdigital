import Head from "next/head";
import CalendlyWidget from "@/app/components/calendly";
import Link from "next/link";
import Image from "next/image";
import twitter from "public/twitterIcon.svg";

export default function Index() {
  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>JHB Digital</title>
        <meta name="description" content="vins" />
      </Head>
      <div className="h-12"></div>

      <CalendlyWidget></CalendlyWidget>
   
    </div>
  );
}
