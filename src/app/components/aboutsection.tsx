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
              <span className="text-primary-text italic"> What </span>is short
              form content?{" "}
            </h2>
            <p className="text-lg mb-8">
              In recent years,{" "}
              <span className="text-primary-text italic">
                short form content
              </span>{" "}
              has taken over{" "}
              <span className="text-primary-text italic">the world</span> <br />
              <br />
              With platforms like{" "}
              <span className="text-primary-text italic">
                tiktok, youtube and instagram
              </span>{" "}
              adopting short form content features, now is the best time to
              start using short form content in your marketing strategy <br />
              <br />
              Using short form video, you can reach{" "}
              <span className="text-primary-text italic">
                hundreds of thousands
              </span>{" "}
              , if not{" "}
              <span className="text-primary-text italic">millions of
              people</span>  much more easily than you can with other forms of
              marketing. <br />
              <br />
              On top of that, there is{" "}
              <span className="text-primary-text italic">no cost</span> for
              entry. <br />
              <br />
              <span className="text-primary-text italic">
                PPC ads are expensive
              </span>
              , and doing outreach through email marketing does not give you
              nearly as much reach. <br />
              <br />
              With{" "}
              <span className="text-primary-text italic">
                short form marketing
              </span>{" "}
              , you can{" "}
              <span className="text-primary-text italic">
                quickly attract the attention{" "}
              </span>
              of{" "}
              <span className="text-primary-text italic">
                hundreds of thousands
              </span>{" "}
              of potential clients, who are already{" "}
              <span className="text-primary-text italic">interested</span> in
              what you have to offer
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-primary-text italic">How</span> can short
              form content{" "}
              <span className="text-primary-text italic">help you?</span>
            </h1>

            <p className="text-lg  ">
              In the modern world,{" "}
              <span className="text-primary-text italic"> personal brand</span>{" "}
              is increasingly important. <br /> <br /> To gain people&apos;s
              trust, you need to appear as someone{" "}
              <span className="text-primary-text italic">reliable</span>, <br />{" "}
              not just someone trying to sell to them. <br />
              <br /> Social media is an{" "}
              <span className="text-primary-text italic"> easy way </span>to
              achieve this. <br />
              <br /> Most people use social media for{" "}
              <span className="text-primary-text italic">entertainment</span> or
              <span className="text-primary-text italic">
                {" "}
                information{" "}
              </span>. <br /> By{" "}
              <span className="text-primary-text italic">
                consistently posting informative
              </span>{" "}
              and
              <span className="text-primary-text italic">
                {" "}
                engaging content
              </span>
              , <br /> you can become a{" "}
              <span className="text-primary-text italic">
                figure on their feed
              </span>{" "}
              and make a{" "}
              <span className="text-primary-text italic">
                positive impression
              </span>
              . <br />
              <br /> By creating{" "}
              <span className="text-primary-text italic">
                valuable content
              </span>{" "}
              and{" "}
              <span className="text-primary-text italic">
                genuinely engaging with your audience
              </span>
              , Instead of interrupting their feed.
              <br />
              You can  <span className="text-primary-text italic">establish yourself</span> as a  <span className="text-primary-text italic">trusted authority</span> in the
              community, leading to  <span className="text-primary-text italic">more sales</span> and  <span className="text-primary-text italic">long-term brand ambassadors </span>
              who will recommend your product or service.
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
          </Link>
        </div>
      </div>
    </div>
  );
}
