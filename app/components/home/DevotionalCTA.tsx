import React from "react";
import bgImg from '../../../public/img/devotional-cta-bg.jpg'
import bishop from '../../../public/img/BISHOP.jpg'

const DevotionalCTA = () => {
  return (
    <>

      <section style={{backgroundImage: `url(${bgImg.src})`}} className={`overflow-hidden bg-cover bg-top bg-no-repeat`}>
        <div className="bg-black/25 px-8 py-14 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left m:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Spend time with God
            </h2>

            <p className="max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-lg bg-accent-color px-8 py-2 text-base font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Read Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevotionalCTA;
