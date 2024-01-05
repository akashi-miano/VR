import heroImg from "../assets/banner-img.png";
import avatar1 from "../assets/avt1.png";
import avatar2 from "../assets/avt2.png";
import avatar3 from "../assets/avt3.png";
import avatar4 from "../assets/avt4.png";

const Hero = () => {
  return (
    <section className="bg-black text-white hero-height pt-7 md:pt-0 ">
      <div className="before:bg-circle before:h-[200px] before:w-[600px] before:absolute before:left-[650px] before:top-16 before:hidden before:lg:flex"></div>
      <div className="container max-w-[1200px] mx-auto grid md:grid-cols-2 px-8 items-center gap-8">
        <header className="text-section flow-content--m text-center md:text-left">
          <h1
            className="text-3xl md:text-5xl text-white font-bold"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Let's Explore
            <br /> Three-Dimensional
            <br />
            Visual
          </h1>
          <p
            className="text-gray-400 max-w-[450px] mx-auto md:mx-0"
            data-aos="fade-down"
            data-delay="600"
          >
            With virtual technology you can see the digital world feel more real
            and you can play the game with a new style.
          </p>
          <div
            className="btn-wrapper flex md:flex-row justify-center items-center gap-4 md:justify-start flex-col"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <a href="" className="rounded-md btn--primary px-4 py-2 text-white">
              Get it Now
            </a>
            <a href="" className="btn--secondary">
              Explore Devices
            </a>
          </div>
          <div
            className="people flex justify-center items-center md:justify-start flex-col md:flex-row gap-2"
            data-aos="fade-down"
            data-aos-delay="900"
          >
            <div className="avatar-wrapper flex items-center">
              <img
                className="w-[50px] rounded-full object-cover"
                src={avatar1}
                alt=""
              />
              <img
                className="w-[50px] rounded-full object-cover"
                src={avatar2}
                alt=""
              />
              <img
                className="w-[50px] rounded-full object-cover"
                src={avatar3}
                alt=""
              />
              <img
                className="w-[50px] rounded-full object-cover"
                src={avatar4}
                alt=""
              />
            </div>
            <p className="flex items-center  gap-1 text-sm before:content-[''] before:block before:rounded-full before:bg-green-300 before:w-[20px] before:h-[20px] before:animate-pulse">
              400k people online
            </p>
          </div>
        </header>
        <div className="img-wrapper" data-aos="fade-up" data-aos-delay="800">
          <img src={heroImg} className="w-[85%] mx-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
