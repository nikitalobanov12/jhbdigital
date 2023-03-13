"use client";
import { InlineWidget } from "react-calendly";
import Link from "next/link";
import Image from "next/image";
import twitter from "public/twitterIcon.svg";

export default function CalendlyWidget() {
    return (
      <div className="flex justify-center items-center  flex-col">
        <InlineWidget
          styles={{
            height: "750px",
            width: "100%",
            marginTop: "1rem",
          }}
          pageSettings={{
            backgroundColor: "283545",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "FABA1D",
            textColor: "ffffff",
          }}
          url="https://calendly.com/jhbdigital/demo?embed_domain=www.jhbdigital.com&embed_type=Inline"
        />
        <Link className="mx-auto my-4 hover:scale-110 transition-all" href={"https://twitter.com/jordanbaaailey"}>
          <Image
            src={twitter.src}
            alt="twitter icon"
            width={44}
            height={44}

          ></Image>
        </Link>
      </div>
    );
              
}