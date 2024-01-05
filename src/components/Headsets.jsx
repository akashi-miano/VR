import headSetImg1 from "../assets/headset-1.png";
import headSetImg2 from "../assets/headset-2.png";
import headSetImg3 from "../assets/headset-3.png";
import headSetImg4 from "../assets/headset-4.png";
const Headsets = () => {
  return (
    <section className="py-8 bg-black">
      <div className="container max-w-[1200px] mx-auto ">
        <header className="mb-8 text-center md:text-left" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-white">
            Mixed Reality Headsets
          </h2>
        </header>
        <div className="img-wrapper grid md:grid-cols-2 gap-4 justify-center md:justify-start">
          <div
            className="img-1 relative"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            <img src={headSetImg1} alt="" />
            <div className="text-content text-white absolute bottom-0 backdrop-filter backdrop-blur-xl p-4 flow-content--s">
              <h3 className="text-2xl font-bold">Metaverse</h3>
              <p className="max-w-[250px]">
                A Network of 3D virtual worlds focused on social connection.
              </p>
            </div>
          </div>
          <div
            className="img-2 relative"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1300"
          >
            <img src={headSetImg2} alt="" />
            <div className="text-content text-white absolute bottom-0 backdrop-filter backdrop-blur-xl p-4 flow-content--s">
              <h3 className="text-2xl font-bold">AIoT</h3>
              <p className="max-w-[250px]">
                AI and IoT are both emerging innovative technologies with a lot
                of potentials.
              </p>
            </div>
          </div>
          <div
            className="img-3 relative"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1600"
          >
            <img src={headSetImg3} alt="" />
            <div className="text-content text-white absolute bottom-0 backdrop-filter backdrop-blur-xl p-4 flow-content--s">
              <h3 className="text-2xl font-bold">HoloLens</h3>
              <p className="max-w-[250px]">
                HoloLens display information, blend with the real world , or
                even simulate a virtual world.
              </p>
            </div>
          </div>
          <div
            className="img-4 relative"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1900"
          >
            <img src={headSetImg4} alt="" />
            <div className="text-content text-white absolute bottom-0 backdrop-filter backdrop-blur-xl p-4 flow-content--s">
              <h3 className="text-2xl font-bold">TPCASTT</h3>
              <p className="max-w-[250px]">
                Method is great to start students reading and inferring with
                little assistance from the instructor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
