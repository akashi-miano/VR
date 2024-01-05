import img1 from "../assets/exp-img1.png";
import img2 from "../assets/exp-img2.png";

const Experience = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto max-w-[1200px] grid md:grid-cols-2 gap-16">
        <div className="img-wrapper flex items-center flex-row gap-4">
          <img
            src={img1}
            alt=""
            className="relative md:top-[-25%] w-full"
            data-aos="fade-down"
            data-aos-duration="500"
          />
          <img
            src={img2}
            alt=""
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="500"
          />
        </div>
        <header
          className="text-content flow-content--m text-center md:text-left"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <h2 className="text-3xl font-bold">
            New Experience in
            <br /> Playing Game
          </h2>
          <p className="text-gray-400">
            You can try playing the game with a new style and of course a more
            real fell, like you are the main character in your game and
            adventure in this new digital world.
          </p>
          <a href="" className="btn--primary w-fit mx-auto md:mx-0">
            Get it now
          </a>
        </header>
      </div>
    </section>
  );
};

export default Experience;
