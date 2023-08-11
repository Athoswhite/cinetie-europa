import React from "react";
import Qoutes from "./Qoutes";
import Bookings from "./Bookings";
import About from "./About";
import Pay from "./Pay"

export default function Main() {
  return (
    <section className="">
      <section
        id="home"
        className="bg-gradient-to-r  py-24"
      >
        <div className="container mx-auto ">
        <About />
        </div>
      </section>

      <section id="about" className="bg-black py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            What is <span className="text-purple-500">Cinetie</span> Europe.
          </h2>
          <p className="md:w-2/3 mx-auto text-white leading-relaxed text-lg md:text-xl mb-10">
            Cinetie Europe is a film streaming platform designed to bring
            entertainment to the European audience by providing premium content
            from African producers. We stream various films, including short
            films, feature films, documentaries, TV series, and animations.
          </p>
          <div className="  p-2 rounded-lg mx-auto ">
            <Qoutes />
          </div>
        </div>
      </section>

      <section id="attend" className="py-20 ">
        <div className="container mx-auto flex flex-wrap justify-center">
          <Bookings />
          <Pay />
        </div>
      </section>
    

      <section id="contact" className="bg-black text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Get In Touch</h1>
          <p className="text-xl md:text-2xl mb-12">
            Our 24/7 support staff is ready to answer any questions or inquiries
            you may have. We love hearing from you.
          </p>
          <input
            type="email"
            placeholder="tracy@cinetie.com"
            name="email"
            autoComplete="email"
            className="border border-gray-600 w-full md:w-1/4 pr-2 pl-2 py-2 md:py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
          />
          <a
            className="inline-block px-6 py-3 mt-3 bg-white text-black font-medium rounded-md transition duration-500 ease-in-out transform hover:bg-gray-100"
            href="mailto:tracy@cinetie.com"
          >
            Email Us
          </a>
        </div>
      </section>
    </section>
  );
}
