import Head from "next/head";
import CalendlyWidget from "@/app/components/calendly";


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
