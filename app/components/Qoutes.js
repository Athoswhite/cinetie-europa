import React from "react";
import Image from "next/image";

const Qoutes = () => {
  

  return (
    <div>
      <div className="flex justify-center ">
        <div className="relative lg:w-1/2 sm:w-50 xl:h-96 h-80">
          <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-white rounded-full animate-pulse ">
            <Image src="/images/tracy.jpeg" width={90} height={90} alt="image of profile" />
          </div>
        </div>
        <div className=" xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col">
          <div>
            <p className="text-base font-medium leading-6 mt-4 text-neutral-500">
              "With this innovative platform that showcases the diversity and creativity of African cinema, Cinetie contributes to the entertainment of European audiences by offering them a variety of films that reflect the different cultures, languages, histories, and realities of Africa. Cinetie also exposes European audiences to new genres, styles, and perspectives that they may not be familiar with or have access to through mainstream media. Secondly, Cinetie can also challenge some of the stereotypes and misconceptions that some Europeans may have about Africa and its people, by presenting them with authentic and nuanced stories that celebrate the richness and complexity of African identities. Furthermore, Cinetie inspires European audiences to learn more about Africa and its film industry, which is one of the fastest-growing and most dynamic in the world."
            </p>
            <p className="text-base font-medium leading-6 mt-4 text-neutral-500">
              "Cinetie fosters cross-cultural dialogue and exchange between African and European filmmakers and viewers, by creating opportunities for collaboration, feedback, and appreciation with regards to supporting the development and sustainability of the African film industry by providing a platform for distribution, exposure, and revenue generation for African filmmakers. Finally, Cinetie can also contribute to the promotion and protection of cultural diversity, which is a fundamental human right and a source of social cohesion and development. With Cinetie, African film producers will be able to showcase their content to the European audience and vice versa."
            </p>
          </div>
          <br/>
          <br/>

          <div className="md:mt-0 mt-8">
            <p className="text-base font-medium leading-4 neutral-800">
            TRACY HOFFMAN
            </p>
            <p className="text-base leading-4 mt-2 mb-4 neutral-800">
            CEO 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qoutes;
