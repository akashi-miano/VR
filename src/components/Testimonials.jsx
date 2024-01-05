import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { slider } from "../../data.js";

const Testimonials = () => {
  return (
    <section className="py-8 text-white bg-black relative">
      <div className="container max-w-[1200px] mx-auto">
        <div className="testimonial-card bg-purple-400/10 p-8 rounded-lg">
          <header className="text-center flow-content--m mb-8">
            <h2
              className="text-3xl font-bold"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              What our clients say
            </h2>
            <p
              className="max-w-[751px] mx-auto"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="800"
            >
              See what our customer say about us. It really matter for us. How
              good or bad we will make ir for evaluation to make EhyalLive
              better.
            </p>
          </header>
          <Swiper
            className="flow-content--m translate-y-40"
            data-aos="fade-up"
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {slider.map((slide, index) => {
              const { message, image, name, email } = slide;
              return (
                <SwiperSlide className="rounded-lg min-h-[240px] bg-gradient-to-r from-[#130613] via-[#2a1428] to-[#331a35] flow-content--m p-4 lg:p-6 mb-8">
                  <p className="max-w-[450px]">{message}</p>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="img-wrapper">
                      <img src={image} alt="" />
                    </div>
                    <div className="text-content text-center md:text-left">
                      <div className="font-medium">{name}</div>
                      <div className="text-rose-500">{email}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
