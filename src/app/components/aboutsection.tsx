import React from "react";
import Image from "next/image";
import socials from "public/youtube.jpg";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="bg-background text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mr-4">
            <h2 className="text-3xl font-bold mb-4">
              What is short form content?{" "}
            </h2>
            <p className="text-lg mb-8">
              In recent years, short form content has taken over the world{" "}
              <br />
              <br />
              With platforms like tiktok, youtube and instagram adopting short
              form content features, now is the best time to start using short
              form content in your marketing strategy <br />
              <br />
              Using short form video, you can reach hundreds of thousands, if
              not millions of people much more easily than you can with other
              forms of marketing. <br />
              <br />
              On top of that, there is no cost for entry. <br />
              <br />
              PPC ads are expensive, and doing outreach through email marketing
              does not give you nearly as much reach. <br />
              <br />
              With short form marketing, you can quickly attract the attention
              of hundreds of thousands of potential clients, interested in what
              you have to offer
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              How can short form content help you?
            </h1>

            <p className="text-lg  ">
              In the modern world, personal brand is increasingly important.{" "}
              <br /> <br /> To gain people&apos;s trust, you need to appear as
              someone reliable, <br /> not just someone trying to sell to them.{" "}
              <br />
              <br /> Social media is an easy way to achieve this. <br />
              <br /> Most people use social media for entertainment or
              information. <br /> By consistently posting informative and
              engaging content, <br /> you can become a figure on their feed and
              make a positive impression. <br />
              <br /> By creating valuable content and genuinely
              engaging with your audience, Instead of interrupting their feed.
              <br />
              You can establish yourself as a
              trusted authority in the community, leading to more sales
              and long-term brand ambassadors who will recommend your product or
              service.
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="w-full inline-block">
            <Link
              href="/contact"
              className="bg-primary-text inline-block hover:bg-secondary-700 transition text-background hover:text-white mb-4 font-bold py-2 px-4 text-xl text-center rounded-md w-full"
            >
              Get Started
            </Link></div>
      </div>
    </div>
  );
}
