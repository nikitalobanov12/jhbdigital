import Link from "next/link";
import Image from "next/image";
import btwflip from "public/transition-blacktowhite.svg";
export default function Footer() {
  return (
    <div>
      <Image
        src={btwflip.src}
        alt="transition"
        width={btwflip.width}
        height={btwflip.height}
      />
      <footer className="p-4  sm:p-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-primary-500 transition ">
                  JHB Digital
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <Link
                  className="hover:text-primary-500 transition-all"
                  href="/info"
                >
                  <h2 className="mb-6 text-sm font-semibold uppercase ">
                    Info
                  </h2>
                </Link>
              </div>
              <Link
                className="hover:text-primary-500 transition-all"
                href={"/about"}
              >
                <h2 className="mb-6 text-sm font-semibold  uppercase ">
                  About
                </h2>
              </Link>
              <Link
                className="hover:text-primary-500 transition-all"
                href={"/"}
              >
                <h2 className="mb-6 text-sm font-semibold  uppercase ">Home</h2>
              </Link>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Designed by{" "}
              <Link
                href="https://www.seosurge.net"
                className="hover:underline transition-all"
              >
                SEO Surge
              </Link>
            </span>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link
                href="https://www.jhbdigital.com/"
                className="hover:underline transition-all"
              >
                JHB Digital
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link
                href="https://twitter.com/jordanbaaailey"
                className="text-gray-500 hover:text-primary-500  transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

}