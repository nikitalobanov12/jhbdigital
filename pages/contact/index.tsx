import Head from "next/head";
import CalendlyWidget from "@/app/components/calendly";


export default function Index() {
  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>Contact JHB Digital</title>
        <meta
          name="description"
          content="schedule a strategy call to find out how social media marketing can benefit your b2b business. "
        />
      </Head>
      <div className="h-12"></div>

      <CalendlyWidget></CalendlyWidget>
    </div>
  );
}
