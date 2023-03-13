import Hero from "./components/hero"
import Header from "./components/header"
import AboutIndex from "./components/aboutindex"
import Testimonials from "./components/testimonials"
import InfoIndex from "./components/infoindex"
import Footer from "./components/footer"
import AboutSection from "./components/aboutsection"
import VideoTestimonials from "./components/videoTestimonials"
import Image from "next/image"
import btw from "public/transition-blacktowhite.svg";
import CTA from "./components/cta"
import PainPoints from "./components/painpoints"

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <PainPoints></PainPoints>
      <AboutIndex />
      <Image
        src={btw.src}
        alt="transition"
        width={btw.width}
        height={btw.height}
      />
      <Testimonials />
      <InfoIndex showButton={true} />
      <VideoTestimonials />
     
      <CTA/>
      {/* <AboutPreview/> */}
      <Footer />
    </div>
  );

}