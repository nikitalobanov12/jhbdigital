"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselComponent() {
   return (
     <div className="w-full h-[700px] md:h-full ">
       <Carousel
         indicators={false}
         slide={false}
         leftControl={
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke-width="1.5"
             stroke="currentColor"
             className="w-6 h-6"
           >
             <path
               stroke-linecap="round"
               stroke-linejoin="round"
               d="M15.75 19.5L8.25 12l7.5-7.5"
             />
           </svg>
         }
         rightControl={
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke-width="1.5"
             stroke="currentColor"
             className="w-6 h-6"
           >
             <path
               stroke-linecap="round"
               stroke-linejoin="round"
               d="M8.25 4.5l7.5 7.5-7.5 7.5"
             />
           </svg>
         }
       >
         <div className="flex  items-center justify-center">
           <iframe
             src="https://fast.wistia.net/embed/iframe/05b89d8xbf"
             title="CA DOT COM Video"
             allow="autoplay; fullscreen"
             frameBorder="0"
             scrolling="no"
             className="wistia_embed"
             name="wistia_embed"
             width="361"
             height="648"
           ></iframe>
         </div>
         <div className="flex  items-center justify-center">
           <iframe
             src="https://fast.wistia.net/embed/iframe/1mfkju0mw3"
             title="Joe rogan video"
             allow="autoplay; fullscreen"
             frameBorder="0"
             scrolling="no"
             className="wistia_embed"
             name="wistia_embed"
             width="361"
             height="648"
           ></iframe>
         </div>
         <div className="flex  items-center justify-center">
           <iframe
             src="https://fast.wistia.net/embed/iframe/xvmgy29w4d"
             title="Reel Video"
             allow="autoplay; fullscreen"
             frameBorder="0"
             scrolling="no"
             className="wistia_embed"
             name="wistia_embed"
             width="361"
             height="648"
           ></iframe>
         </div>
         <div className="flex  items-center justify-center">
           <iframe
             src="https://fast.wistia.net/embed/iframe/r3wki5z1nv"
             title="Self Doubt Definition Video"
             allow="autoplay; fullscreen"
             frameBorder="0"
             scrolling="no"
             className="wistia_embed"
             name="wistia_embed"
             width="361"
             height="648"
           ></iframe>
         </div>
         <div className="flex  items-center justify-center">
           <iframe
             src="https://fast.wistia.net/embed/iframe/lpuoz2f0x5"
             title="Kid in Paris Video"
             allow="autoplay; fullscreen"
             frameBorder="0"
             scrolling="no"
             className="wistia_embed"
             name="wistia_embed"
             width="361"
             height="648"
           ></iframe>
         </div>
         <div className="flex  items-center justify-center">
           <iframe
             src="https://fast.wistia.net/embed/iframe/st2chrp0tr"
             title="Scripts from the top of the dome Video"
             allow="autoplay; fullscreen"
             frameBorder="0"
             scrolling="no"
             className="wistia_embed"
             name="wistia_embed"
             width="361"
             height="648"
           ></iframe>
         </div>
       </Carousel>
     </div>
   );
}