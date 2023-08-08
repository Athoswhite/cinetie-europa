import React from "react";

export default function Bookings() {
  return (
    <>
      <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div className=" lg:w-1/2 w-full">
            <p className="text-base leading-4 text-red-700">ATTEND LIVE</p>
            <h5
              role="heading"
              className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-white"
            >
              Join our <span className="text-purple-600">CINETIE</span> Europe launching
            </h5>
            <p
              role="contentinfo"
              className="text-base leading-5 mt-5 text-neutral-500"
            >
              Come to our African event in Stockholm to support and celebrate
              the start of a new streaming platform, Cinetie, with 80% African
              content. This event promises to be an incredible opportunity to
              immerse yourself in the rich and diverse culture of Africa while
              simultaneously supporting and promoting African talent.
            </p>
            <p
              role="contentinfo"
              className="text-base leading-5 mt-5 text-neutral-500"
            >
              By attending this event, you will not only have the chance to
              enjoy an array of captivating movies, series, and documentaries
              from Africa, but you will also be contributing to the growth and
              development of the African film industry. Cinetie aims to provide
              a platform for African filmmakers to showcase their work and reach
              a global audience, allowing their stories to be heard and
              appreciated on an international scale.
            </p>
            <p
              role="contentinfo"
              className="text-base leading-5 mt-5 text-neutral-500"
            >
              By attending this event, you will not only have the chance to
              enjoy an array of captivating movies, series, and documentaries
              from Africa, but you will also be contributing to the growth and
              development of the African film industry. Cinetie aims to provide
              a platform for African filmmakers to showcase their work and reach
              a global audience, allowing their stories to be heard and
              appreciated on an international scale.
            </p>
            <div className="w-56 text-neutral-900">
              <div className="shadow rounded-full flex items-center mt-10">
                <a
                  href="https://buy.stripe.com/aEUeX7g5acRk8qQbIL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-black rounded-full py-4 px-6 mr-1 hover:bg-red-500"
                  id="monthly"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <img
              src="https://clipground.com/images/pink-tickets-clipart-13.jpg"
              className="absolute w-full -ml-12 mt-24"
              alt="background circle images"
            />
            <div
              role="listitem"
              className="bg-neutral-900  shadow rounded-lg p-8 relative z-30"
            >
              <p className="md:w-80 text-base leading-6 mt-4 text-white">
                Attend live events
              </p>
            </div>
            <div
              role="listitem"
              className="bg-neutral-900  shadow rounded-lg mt-3 flex relative z-30"
            >
              <div className="w-2.5  h-auto bg-red-700 rounded-tl-md rounded-bl-md" />
              <div className="w-full p-8">
                <p className="md:w-80 text-base leading-6 mt-4 text-white">
                  Free subscription for the first month to Cinetie{" "}
                </p>
              </div>
            </div>
            <div
              role="listitem"
              className="bg-neutral-900  shadow rounded-lg p-8 relative z-30 mt-7"
            >
              <p className="md:w-80 text-base leading-6 mt-4 text-white">
                5 days video editing course and IP{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
