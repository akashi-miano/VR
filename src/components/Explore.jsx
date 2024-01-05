import React from "react";

const Explore = () => {
  return (
    <section className="bg-black py-36 text-white">
      <div className="container mx-auto max-w-[1250px] grid lg:grid-cols-2 lg:bg-explore bg-no-repeat bg-cover bg-center w-full md:w-[85%]">
        <form
          action=""
          className="flow-content--m  p-16 bg-explore bg-no-repeat bg-cover  md:bg-center lg:bg-none"
        >
          <header className="flow-content--m">
            <h2
              className="text-3xl font-bold"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              Explore product in new way
            </h2>
            <p
              className=""
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              nobis, excepturi harum dolorum deleniti dolorem esse, nostrum
              libero placeat fugit amet temporibus, veritatis possimus facilis.
            </p>
          </header>
          <div
            className="input-wrapper flex flex-col md:flex-row items-center gap-4"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <input
              placeholder="Your email"
              className="text-inherit w-full p-2 bg-gradient-to-t from-[#341d38] to-[#271223] outline-none rounded-md h-12"
              type="text"
            />
            <button type="submit" className="btn--primary w-full h-12 md:w-fit">
              Start
            </button>
          </div>
        </form>
        <div className="bg-explore bg-no-repeat bg-cover md:bg-none"></div>
      </div>
    </section>
  );
};

export default Explore;
