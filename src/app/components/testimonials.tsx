import Link from "next/link"
import Image from "next/image"
import willgill from "public/will-gill-pic.jpg";
import matt from "public/matt.jpg";
import dangibs from "public/dan-gibs.jpg";
import zoltan from "public/zoltan.jpg";
export default function Testimonials() {
   return (
     <section className="bg-white">
       <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
         <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
           <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
             My Clients
           </h2>
           <p className="font-light  lg:mb-16 sm:text-xl">
             
           </p>
         </div>
         <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
           <Link
             className="hover:scale-105 transition-all transform-cpu"
             target="_blank"
             href="https://em-consulting.net/"
           >
             <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 max-w-4/5">
               <Image
                 src={matt.src}
                 alt="Matthias Loesche"
                 width={matt.width}
                 height={matt.height}
                 className="sm:w-1/2 w-full rounded max-w-[361px]"
               ></Image>
               <div className="p-5 max-w-[300px]">
                 <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  
                     Matthias Loesche
                   
                 </h3>
                 <span className="text-gray-500 dark:text-gray-400">
                   E&M Consulting
                 </span>
                 <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                   I helped scale Matthias&apos;s social media presence by repurposing his long-form content into short-form content
                 </p>
               </div>
             </div>
           </Link>
           <Link
             className="hover:scale-105 transition-all transform-cpu"
             target="_blank"
             href="https://www.instagram.com/william.gill/"
           >
             <div className=" items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
               <Image
                 src={willgill.src}
                 alt="William Gill Fit boss coaching"
                 width={willgill.width}
                 height={willgill.height}
                 className="rounded sm:w-1/2 w-full max-w-[361px]"
               ></Image>
               <div className="p-5 max-w-[300px]">
                 <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                
                     William Gill
                   
                 </h3>
                 <span className="text-gray-500 dark:text-gray-400">
                   Fit Boss Coaching
                 </span>
                 <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                   I Drove traffic to his high ticket coaching funnel with short-form content posted on Instagram, Tik Tok, & Youtube
                 </p>
               </div>
             </div>
           </Link>
           <Link
             className="hover:scale-105 transition-all transform-cpu"
             target="_blank"
             href="https://www.tiktok.com/@dangibsonmentoring"
           >
             <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
               <Image
                 src={dangibs.src}
                 alt="dan-gibson mentoring"
                 width={dangibs.width}
                 height={dangibs.height}
                 className="rounded sm:w-1/2 w-full max-w-[361px]"
               ></Image>
               <div className="p-5 max-w-[300px]">
                 <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
               
                     Dan Gibson
                
                 </h3>
                 <span className="text-gray-500 dark:text-gray-400">
                   Relationships Coach
                 </span>
                 <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                   Dan Gibson started with 500 followers, I made him go viral and now he doesn&apos;t have to cold-dm people, he has people dm&apos;ing him.
                 </p>
               </div>
             </div>
           </Link>
             <Link
               className="hover:scale-105 transition-all transform-cpu"
               target="_blank"
               href="https://www.instagram.com/ecsediweightloss/"
             >
           <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
               <Image
                 src={zoltan.src}
                 alt="Zoltan Ecsedi video editor"
                 width={zoltan.width}
                 height={zoltan.height}
                 className="rounded w-full sm:w-1/2"
               ></Image>
             <div className="p-5 max-w-[300px]">
               <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              
                   Zoltan Ecsedi
                
               </h3>
               <span className="text-gray-500 dark:text-gray-400">
                 Ecsedi Weight Loss
               </span>
               <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                 Used my videos to completely revive their Instagram page from the dead, driving traffic to a high ticket weightloss offer.
               </p>
             </div>
           </div>
                   </Link>
         </div>
       </div>
     </section>
   );
}