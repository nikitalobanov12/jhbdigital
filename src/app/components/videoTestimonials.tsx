import React from "react";
import Image from "next/image";
import will from "public/will-gill-pic.jpg";
import matt from "public/matt.jpg";
export default function VideoTestimonials() {
  return (
    <div className="bg-white">
      <div className="lg:px-20 md:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800 capitalize">
            What do my clients say?
          </h1>
        </div>
        <div className="w-full lg:flex flex-col items-center gap-6 mt-10">
          <iframe
            src="https://fast.wistia.net/embed/iframe/w5xz0zl409?videoFoam=true"
            title="William Gill Testimonial Video"
            allow="autoplay; fullscreen"
            className="max-w-full aspect-video h-auto mb-4"
            name="wistia_embed"
            width="704"
            height="396"
          ></iframe>
          <div className="w-full max-w-[704px]">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="27"
                  viewBox="0 0 25 27"
                  fill="none"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M24.5767 14.331H18.6157C18.7176 9.55831 19.9498 9.01654 21.4974 8.86191L22.0942 8.78063V3.53254L21.4063 3.57304C19.3854 3.69795 17.1512 4.09818 15.6605 6.11977C14.3539 7.89195 13.7778 10.7872 13.7778 15.2317V23.4674H24.5767V14.331Z"
                      fill="#b45309"
                    />
                    <path
                      d="M10.7988 23.4674V14.331H4.91744C5.01934 9.55831 6.21168 9.01654 7.75927 8.86191L8.31634 8.78063V3.53254L7.66816 3.57304C5.64729 3.69795 3.39306 4.09818 1.90245 6.11977C0.595916 7.89195 -5.72205e-06 10.7872 -5.72205e-06 15.2317V23.4674H10.7988Z"
                      fill="#b45309"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height="27"
                        fill="white"
                        transform="translate(24.5767 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                Jordan has been an absolute pleasure to work with... He&apos;s a
                very proactive person... He&apos;s very easy to work with, very
                willing to go above and beyond to make sure your business really
                grows. Jordan is the man behind that magic
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                  width={23}
                  height={20}
                />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <Image
                  src={will.src}
                  className="w-10 h-10 rounded-full"
                  width={will.width}
                  height={will.height}
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  William Gill
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  Fit Boss Coaching
                </p>
              </div>
            </div>
          </div>
          <iframe
            src="https://fast.wistia.net/embed/iframe/vedgwtrtfj?videoFoam=true"
            title="Testimonial Video"
            allow="autoplay; fullscreen"
            scrolling="no"
            className="max-w-full aspect-video h-auto mb-4 "
            name="wistia_embed"
            width="704"
            height="396"
          ></iframe>
          <div className="w-full max-w-[704px] lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="27"
                  viewBox="0 0 25 27"
                  fill="none"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M24.5767 14.331H18.6157C18.7176 9.55831 19.9498 9.01654 21.4974 8.86191L22.0942 8.78063V3.53254L21.4063 3.57304C19.3854 3.69795 17.1512 4.09818 15.6605 6.11977C14.3539 7.89195 13.7778 10.7872 13.7778 15.2317V23.4674H24.5767V14.331Z"
                      fill="#b45309"
                    />
                    <path
                      d="M10.7988 23.4674V14.331H4.91744C5.01934 9.55831 6.21168 9.01654 7.75927 8.86191L8.31634 8.78063V3.53254L7.66816 3.57304C5.64729 3.69795 3.39306 4.09818 1.90245 6.11977C0.595916 7.89195 -5.72205e-06 10.7872 -5.72205e-06 15.2317V23.4674H10.7988Z"
                      fill="#b45309"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height="27"
                        fill="white"
                        transform="translate(24.5767 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                And it turned out that Jordan is really, really good when it
                comes to producing short form content... Jordan knows how to cut
                videos to make them go viral, and this is amazing... Just give
                it a try, it worked out amazingly well... I can reccomend it to
                anyone who is in coaching, consulting, or owns an agency.
              </p>

              <div className="absolute bottom-0 -mb-4 ml-10">
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                  width={23}
                  height={20}
                />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <Image
                  src={matt.src}
                  className="w-10 h-10 rounded-full"
                  width={matt.width}
                  height={matt.height}
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Matthias Loesche
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  E&M Consulting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
