import React from "react";
import Image from "next/image";
import Qoutes from "./Qoutes";
import Bookings from "./Bookings";

export default function Main() {
  return (
    <>
      <section class="text-gray-600 body-font">
        {/* Banner starts here */}
        <section id="home">
          <div className="py-10 md:py-20 flex flex-col items-center justify-center">
            <div className="xl:w-3/4 w-11/12 md:w-5/6">
              <br />
              <br />
              <br />

              <h1
                role="heading"
                tabIndex={0}
                className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-white"
              >
                Entertain Europe Through{" "}
                <span className="text-purple-600">African Cinema</span>
              </h1>
            </div>
            <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
              <div className="ml-6 mt-16">
                <div className="flex items-center justify-end my-6">
                  <img
                    tabIndex={0}
                    src="https://hls-dash-drm-source-1xi7l5k006rpx-thumbnails.s3.amazonaws.com/85f009f0-b41d-4515-807a-91e29926d884.jpg"
                    alt="cinetie movie"
                    className="w-[400px] h-[200px] rounded-lg md:w-[300px] md:h-[150px] sm:w-[200px] sm:h-[100px]"
                  />
                </div>
                <div className="flex items-start">
                  <img
                    tabIndex={0}
                    src="https://hls-dash-drm-source-1xi7l5k006rpx-thumbnails.s3.amazonaws.com/0f3dc3cd-7413-48f8-af80-cc87d1ba936c.jpg"
                    alt="girl with bluw background"
                    className="w-[600px] h-[400px] rounded-lg md:w-[400px] md:h-[300px] sm:w-[300px] sm:h-[200px]"
                  />
                </div>
              </div>
              <div className="ml-6 mt-16">
                <img
                  tabIndex={0}
                  src="https://vod-pipeline-3-thumbnails.s3.eu-west-1.amazonaws.com/a242235e-7294-4dce-a738-4336f6020f46.jpg"
                  className="w-[400px] h-[600px] rounded-lg md:w-[300px] md:h-[450px] sm:w-[200px] sm:h-[300px]"
                  alt="guy with sunglasses"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 md:mt-8">
            <a href="#" className="btn btn-primary btn-animated">
              Stream on Cinetie
            </a>
          </div>
        </section>
        {/* end of Banner */}
        <section id="about">
          <h2 className="pt-10 md:pt-40 mb-4 md:mb-1 text-xl md:text-2xl lg:text-4xl font-semibold text-center text-gray-200">
            What is <span className="text-purple-600">Cinetie</span> Europe.
          </h2>

          <br></br>

          <p className="mx-auto text-sm md:text-xl text-center text-gray-300 font-normal leading-relaxed md:w-3/4 lg:w-2/3 text-justify">
            Cinetie Europe is a film streaming platform design to bring the
            entertainment to the Europe audience by providing premium content
            from African producers to the European audience. We stream different
            film including but not limited to short films, long feature film,
            documentary, TV series and animations.
          </p>
          <div className="pt-6 md:pt-12 pb-20 md:w-[1000px] mx-auto md:px-1">
            <div className="bg-neutral-900 backdrop-filter backdrop-blur-lg backdrop-opacity-10 p-4 rounded-lg">
              <Qoutes />
            </div>
          </div>
        </section>
        <seaction id="attend">
          <Bookings />
        </seaction>

        <section className="relative pb-10 md:pb-24" id="contact">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-12 md:py-36">
              <h1 className="mb-3 md:mb-5 text-3xl md:text-6xl font-bold text-white">
                Get In Touch
              </h1>
              <h1 className="mb-6 md:mb-9 text-lg md:text-2xl font-semibold text-gray-200">
                Our 24 / 7 support staff is ready to answer any questions or
                inquiries you may have. We love hearing from you.
              </h1>
              <input
                type="email"
                placeholder="hello@cinetie.com"
                name="email"
                autoComplete="email"
                className="border border-gray-600 w-full md:w-1/4 pr-2 pl-2 py-2 md:py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
              />
              <a
                className="inline-flex items-center px-6 py-2 mt-2 md:mt-3 ml-0 md:ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
                href="/"
              >
                <span className="justify-center">Email Us</span>
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
