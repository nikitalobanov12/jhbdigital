import Head from "next/head";
import Features from "@/app/components/features";
import Hero from "@/app/components/infohero";
import AboutSection from "@/app/components/aboutsection";
import Testimonials from "@/app/components/testimonials";
import VideoTestimonials from "@/app/components/videoTestimonials";
import CTA from "@/app/components/cta";
import InfoIndex from "@/app/components/infoindex";
import Footer from "@/app/components/footer";
import Image from "next/image";
import btw from "public/transition-blacktowhite.svg";
import React from "react";

export default function Index() {
  
  
  return (
    <div className="bg-background">
      <Head>
        <title>JHB Digital</title>
        <meta name="description" content="vins" />
      </Head>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <Image
        src={btw.src}
        alt="transition"
        width={btw.width}
        height={btw.height}
      ></Image>
      <Testimonials></Testimonials>
      <VideoTestimonials></VideoTestimonials>
      <InfoIndex showButton={false}></InfoIndex>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}
