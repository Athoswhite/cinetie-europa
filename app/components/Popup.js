"use client";

import React, { useState } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="w-full p-8 inline-block rounded bg-neutral-900 px-6 pb-2 pt-2.5 hover:bg-purple-900 "
        onClick={() => setIsOpen(true)}
      >
        <p className="pt-8 text-red-700 text-xl leading-normal">
          Buy Your Ticket Now
        </p>
        <p className="pb-4 pt-4 text-white font-bold text-left">Additional Benefits:</p>
        <p className="pb-8 text-white text-left">
        🌟 Unveiling the Ultimate Cinematic Experience and Empowerment!
        </p>
        <p className="pb-8 text-white text-left ">
        🌟 🎬 Prepare to embark on a journey like no other, while shaping the future of African cinema! 🎬 Introducing an offer
        that will not only immerse you in the captivating world of African culture and cinema but also contribute to a groundbreaking cause.
        </p>
        <p className="font-bold text-white text-left pb-2">🌍✨ 🌟 Behold, the Exclusive Cinetie:</p> 
        <p className="p-0 text-white text-left">
        Europe Unveiled! 🌟 On
                  the 29th of September, from 16:30 to 00:00, history will be
                  made at the iconic Filmhuset Stockholm. Get ready to be part
                  of an extraordinary evening that celebrates the magic of
                  cinema, Africa and paves the way for a new chapter in the
                  Cinetie story!
        </p>
        <p className="p-0 text-white text-left font-bold text-center py-8 ">
          CLICK TO SEE MORE
        </p>
      </button>

      {isOpen && (
        <div
          className="fixed left-0 top-0 z-[1055] h-screen w-screen overflow-x-hidden outline-none flex items-center justify-center bg-opacity-30 backdrop-filter backdrop-blur-lg"
          id="exampleModalScrollable"
          tabIndex="-1"
          aria-labelledby="exampleModalScrollableLabel"
          aria-hidden="true"
        >
          <div className="relative max-w-[900px]  w-full bg-white rounded-md text-current dark:bg-neutral-900 max-h-[700px] overflow-y-auto">
            <div className="flex items-center justify-between rounded-t-md p-4">
              <h5
                className="text-xl font-medium leading-normal text-white dark:text-neutral-200"
                id="exampleModalScrollableLabel"
              >
                🌍 Your Ticket Includes:
              </h5>
              <button
                type="button"
                className="box-content border-none bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full btn-animated"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div className="text-white overflow-y-auto p-4">
            <ol class="list-outside">
            <li><span className="text-red-500 font-bold">Full Access Pass to the Cinetie Event</span> - An immersive
                  experience that transcends borders, where cinematic
                  enthusiasts and visionaries come together to shape the future
                  of storytelling.
                  </li>
                  <br />
                  <li>
                  🎥 <span className="text-red-500 font-bold">An Array of Captivating Films and Masterpieces</span> - Immerse
                    yourself in an exclusive selection of cinematic treasures,
                    giving you a glimpse into the heart and soul of Africa's
                    diverse narratives.
                  </li>
                  <br />
                  <li>
                  <span className="text-red-500 font-bold">🌟Inspiring Talks </span> - Gain insights from industry luminaries
                  and visionaries, including the renowned CEO of Cinetie, a
                  trailblazing film producer who has championed African cinema
                  on the global stage.
                  </li>
                  <br />
                  <li>
                  <span className="text-red-500 font-bold">🌆 Unveiling of the Cinetie Europe Office Project </span>- Witness
                  the grand reveal of our project to establish a new Cinetie
                  office in Europe! Your participation will directly contribute
                  to this groundbreaking initiative that will amplify the impact
                  of African storytelling worldwide.
                  </li>
                  <br />
                  <li>
                  <span className="text-red-500 font-bold">💫 Networking and Cultural Exchange</span> - Connect with fellow
                  cinema enthusiasts, professionals, and change-makers in an
                  atmosphere of collaboration and celebration.
                  </li>
                  <br />
                  <li>
                  <span className="text-red-500 font-bold">🌟 Price: 1590 sek</span> for the Full Package But wait, there's
                  more! As a token of our gratitude for your support, your event
                  ticket grants you exclusive access to:
                  </li>
                  <li>
                  <span className="text-red-500 font-bold">📽️ One Month of FREE Cinetie Subscription</span> - Dive into a world of African cinematic
                  wonders from the comfort of your own home.
                  </li>
                  <li>
                  <span className="text-red-500 font-bold">🎓 Complimentary Video Editing Course</span> - Crafted by the CEO of Cinetie, this
                  course empowers you with the skills to transform your creative
                  visions into captivating stories. By joining us at the Cinetie
                  Event, you're not just attending an event – you're investing
                  in the future of cinema, cross-cultural understanding, and
                  artistic empowerment. Your participation will not only open
                  doors to unparalleled entertainment and education but also
                  directly contribute to the establishment of our new Cinetie
                  office in Europe, bringing us one step closer to global
                  recognition.
                  </li>
            </ol>
              <div style={{ height:'50px' }}></div>
              <p><span className="text-red-500 font-bold">📢 Don't Miss Your Chance to</span>: 🌍 Be part of an
                  event that merges creativity, culture, and community. 🎉 Shape
                  the narrative of African cinema on an international scale. 🌟
                  Contribute to the establishment of the Cinetie Europe Office.
                  Secure your place in cinematic history today! Limited spots
                  available. Let the countdown to the Cinetie Spectacular begin!
                  🌟🎉 🔥 Ignite your passion for cinema. 🤝 Shape the future of
                  storytelling. 🌌 Be a catalyst for change. Cinetie -
                  Connecting Continents through Cinema. 🌍🎬🌟{" "}</p>
                  <br />
                  <br />
                  <p className="text-center p-4">
                  <a
                  href="https://buy.stripe.com/aEUeX7g5acRk8qQbIL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-animated"
                  id="monthly"
                >
                  Buy Ticket Now
                </a>
                </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
