import ModalVideo from "react-modal-video";
import "../../modalVideo.scss";
import { useState } from "react";
import { BsFill0CircleFill, BsPlayCircleFill } from "react-icons/bs";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-black">
      <div className="awesome-experiences bg-[#534686]/30 text-white py-8">
        <div className="wrapper grid md:grid-cols-2 items-center px-8 container mx-auto max-w-[1200px] gap-4 md:gap-0 ">
          <h3
            className="text-2xl font-bold max-w-[450px] mx-auto text-center md:text-left md:max-w-fit"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Awesome experiences with virtual reality world
          </h3>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="NOk_M1Ib5F0"
            onClose={() => setIsOpen(false)}
          />
          <div
            className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex justify-center items-center justify-self-end hover:cursor-pointer mx-auto md:mx-0"
            data-aos="fade-left"
            data-aos-duration="500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsPlayCircleFill
              size={50}
              className="text-white/80 hover:text-white duration-200 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
