import React from "react";
import Navbar from "./Navbar";

const HeaderPage = () => {
  return (
    <header className="w-full">
      <div className="w-full flex align-center justify-center my-8 h-auto">
        <video
          autoPlay
          className="w-full 2xl:h-[520px] h-full object-cover mask"
          muted
          loop={true}
          playsInline
          preload="auto"
          src="https://res.cloudinary.com/demo/video/upload/q_auto,vc_av1/wxo4blppvc14jgm5iaih.webm"
        ></video>
        <div className="absolute max-w-[40%] left-0 top-10 align-center justify-start flex-col">
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678677552/rickandmorty/ers4477-dejzedo-pre-removebg-preview_s2n7ll.webp"
            alt="title"
            className="w-80 mt-8 md:mt-0 md:w-[800px] flex m-auto h-50 object-cover"
          />
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default HeaderPage;
