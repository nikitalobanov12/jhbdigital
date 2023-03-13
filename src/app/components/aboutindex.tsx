import jordan from "public/jordan.jpg";
import Image from "next/image";
import Link from "next/link";
export default function AboutIndex() {
   return (
     <section className="text-white">
       <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 md:flex flex-row-reverse">
         <div className="  sm:text-lg w-full md:w-1/2 mb-4">
           <h1 className="mb-4 text-4xl tracking-tight font-bold  ">
             <span className="italic font-semibold text-primary-500">
               JHB Digital
             </span>{" "}
             <br /> B2B Content Marketing Agency
           </h1>
           <p className="mb-4 font-medium">
             My name&apos;s Jordan. <br /> <br /> I Turn{" "}
             <span className="italic font-semibold text-primary-500">
               Coaches and Agency owners
             </span>{" "}
             into dominant figures in their niche, <br /> helping them{" "}
             <span className="italic font-semibold text-primary-500">
               {" "}
               utilize short-form content{" "}
             </span>
             as their secret weapon. <br />
             <br /> And I&apos;m here to help you too. <br /> <br /> When you
             outsource your digital marketing services to me,
             <br /> you will be able to{" "}
             <span className="italic font-semibold text-primary-500">
               save weeks if not months
             </span>{" "}
             that you would otherwise spend going back and forth with low
             quality-freelancers. <br />
             <br /> You will{" "}
             <span className="italic font-semibold text-primary-500">
               dominate your niche
             </span>
             with a{" "}
             <span className="italic font-semibold text-primary-500">
               defined personal brand
             </span>
             and social media presence, and unlock a stream of new inbound leads
             that you wouldve had no access to otherwise. <br />
             <br /> with me, you can{" "}
             <span className="italic font-semibold text-primary-500">
               streamline your lead generation and lead nurturing processes
             </span>
             , delivering personalized content to potential customers at each
             stage of the buyer&apos;s journey. <br /> <br />{" "}
             <span className="italic font-semibold text-primary-500">All
             you need to do is record,</span> I will handle the rest.
           </p>
           <Link
             href="/info"
             className="inline-flex items-center font-medium text-white bg-primary-500 p-3 rounded-xl hover:bg-white hover:text-primary-500 transition-all dark:text-primary-500 dark:hover:text-primary-700"
           >
             Learn more
             <svg
               className="ml-1 w-6 h-6 "
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 fill-rule="evenodd"
                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                 clip-rule="evenodd"
               ></path>
             </svg>
           </Link>
         </div>
         <div className="w-full md:w-1/2 md:mr-8">
           <Image
             src={jordan.src}
             alt="jordan"
             width={jordan.width}
             height={jordan.height}
           ></Image>
         </div>
       </div>
     </section>
   );
}