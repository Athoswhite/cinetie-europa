import React from "react";

const Pricing = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-white mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-5xl">
            Additional Benefits
          </h2>
          <p className="text-white text-body-color">
            Time: 4.30pm, Date: 29th September 2023
          </p>
        </div>

        <div className="flex justify-center">
          <PricingCard
            type="Cost"
            price="Kr 1590"
            description="Name of the venue: Filmhuset"
            buttonText="Buy Ticket Now"
            active
          >
            <List>One Month of FREE Cinetie Subscription</List>
            <List>Complimentary Video Editing Course and IP</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ children, description, price, type, buttonText, active }) => {
  return (
    <div
      className="w-full max-w-700px px-4 md:px-6 lg:px-8 mx-auto mb-10 p-0"
    >
      <div
        className="relative z-10 bg-white border rounded-xl border-primary border-opacity-20 shadow-pricing sm:p-12 lg:p-5 xl:p-12"
      >
        <span className="block mb-4 text-lg font-semibold text-primary">{type}</span>
        <h2 className="mb-5 text-3xl font-bold text-dark">{price}</h2>
        <p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
          {description}
        </p>
        <ul className="mb-7">
          {children}
        </ul>
        <a
          href="https://buy.stripe.com/bIYdT34ms6sW6iI28d"
          target="_blank"
          rel="noopener noreferrer"
          className={ `${ 
            active 
              ? ` w-[300px] m-4 block text-base font-semibold text-white bg-red-700 border border-red-900 rounded-md text-center p-4 hover:bg-opacity-90 transition ` 
              : ` block w-full rounded-md border border-red-900 bg-transparent p-4 text-center text-base font-semibold text-white transition hover:border-red-900 hover:bg-red-900 hover:text-white ` 
          } ` }
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const List = ({ children }) => {
  return (
    <p className="px-4mb-1 text-base leading-loose text-body-color">{children}</p>
  );
};

export default Pricing;
