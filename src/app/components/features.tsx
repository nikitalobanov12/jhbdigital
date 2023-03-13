import Image from "next/image";
import btw from "public/transition-blacktowhite.svg";
import dan from "public/dan-gibs.jpg";

export default function Features() {
    return (
      <div className="bg-white">
        <Image
          src={btw.src}
          alt="transition"
          width={btw.width}
          height={btw.height}
        ></Image>
        <section className=" mx-auto p-4 ">
          <div className="flex flex-col justify-center max-w-7xl mx-auto md:flex-row ">
            <div className="w-full px-4 md:w-1/2"> 
              <Image
                src={dan.src}
                alt="dan gibson"
                width={dan.width}
                height={dan.height}
              ></Image>
            </div>
            <div className="w-full px-4 md:w-1/2">
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              How can short form content help you?
            </h1>

            <p className="text-lg md:text-xl  ">
              In the modern world, personal brand is increasingly important.{" "}
              <br /> <br /> To gain people&apos;s trust, you need to appear as
              someone reliable, <br /> not just someone trying to sell to them.{" "}
              <br />
              <br /> Social media is an easy way to achieve this. <br />
              <br /> Most people use social media for entertainment or
              information. <br /> By consistently posting informative and
              engaging content, <br /> you can become a figure on their feed and
              make a positive impression. <br />
              <br /> This strategy is much more effective than interrupting
              their feed with paid ads. <br /> you will be established as an
              authority figure in the community and generate a steady stream of
                inbound leads.
                <br /><br /> 
              </p>
              </div>
          </div>
        </section>
      </div>
    );
}