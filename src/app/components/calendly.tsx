"use client";
import { InlineWidget } from "react-calendly";

export default function CalendlyWidget() {
    return (
      <InlineWidget
        styles={{
          height: "950px",
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
    );
              
}