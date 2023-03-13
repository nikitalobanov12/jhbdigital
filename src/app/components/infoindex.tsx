import Link from "next/link"
import React from "react";

interface InfoIndexProps {
  showButton: boolean;
}

export default function InfoIndex(props: InfoIndexProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h1 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Content Marketing Packages for Coaches, Consultants, & Agency owners
          </h1>
          <h2 className="mb-4 text-2xl tracking-tight font-semibold text-black ">
            Simple 3 Step Process
          </h2>
          <ul className="my-4 text-md text-black list-inside">
            <li className="list-decimal">
              <span className="italic"> Done-For-you Script Writing:</span>
              <br /> When you first partner with us, we&apos;ll work together on
              what you want to say, how you want to say it, and what your goals
              are with your personal brand. From there, we will create a custom
              content plan for your brand and write every single hook and script
              for your videos, so you don&apos;t have to think about what
              you&apos;re going to talk about.
              <br />
              <br />
            </li>
            <li className="list-decimal">
              <span className="italic">Recording and Editing:</span>
              <br /> Next, we spend 2 hours of your time per month recording
              your short-form content with our unique content recording system.
              All you have to do is sit down with me and talk -- I&apos;ll do
              the rest. You can expect on average of 60+ short-form videos to be
              produced per month, but most of our clients get more. We then edit
              every single video in house, ensuring quality and, most
              importantly, speed and consistency of delivery (you can&apos;t get
              this with a freelancer from Fiverr).
              <br />
              <br />
            </li>
            <li className="list-decimal">
              <span className="italic">Posting:</span>
              <br /> Finally, we manage the posting of your content completely
              done-for-you, optimising your content for reach and growth of your
              personal brand. We guarantee that we post at least one short-form
              video to every one of your platforms per day.
              <br />
              <br />
            </li>
          </ul>
          {props.showButton && (
            <Link
              href="/info"
              className="inline-flex items-center font-medium transition-all text-primary-600 hover:text-secondary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Learn More
              <svg
                className="ml-1 w-6 h-6"
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
          )}
        </div>
      </div>
    </section>
  );
}