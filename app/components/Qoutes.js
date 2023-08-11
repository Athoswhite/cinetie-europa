import React from "react";

const Quotes = () => {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-indigo-800 py-20 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:flex-col md:items-center">
          <div className="relative hidden sm:block w-32 h-32 md:w-40 sm:w-10 sm:h-10 md:h-40 mb-6 md:mb-4 rounded-full bg-white shadow-lg animate-pulse flex items-center justify-center">
            <img
              src="/images/tracy.jpeg"
              alt="Image of profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="md:ml-8 text-center md:text-left">
            <div className="bg-opacity-90 p-6 rounded-lg shadow-xl">
              <p className="text-lg md:text-xl font-medium leading-7 text-white">
                <i>
                  &ldquo;With this innovative platform that showcases the
                  diversity and creativity of African cinema, Cinetie
                  contributes to the entertainment of European audiences by
                  offering them a variety of films that reflect the different
                  cultures, languages, histories, and realities of
                  Africa.&rdquo;
                </i>
              </p>
              <p className="mt-4 text-lg md:text-xl font-medium leading-7 text-white">
                <i>
                  &ldquo;Cinetie fosters cross-cultural dialogue and exchange
                  between African and European filmmakers and viewers, by
                  creating opportunities for collaboration, feedback, and
                  appreciation with regards to supporting the development and
                  sustainability of the African film industry.&rdquo;
                </i>
              </p>
            </div>
            <div className="md:mt-6 mt-8">
              <p className="text-white font-medium text-lg md:text-xl">
                TRACY HOFFMAN
              </p>
              <p className="text-white text-lg md:text-xl">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
