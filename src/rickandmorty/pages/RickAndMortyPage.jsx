import React from "react";
import Navbar from "../components/header/Navbar";
import Layout from "../components/layout/Layout";

const RickAndMortyPage = () => {
  return (
    <div className="flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="text-white h-screen">
        <div className="w-full flex align-center justify-center h-auto flex-col">
          <video
            autoPlay
            className="w-full aspect-video"
            muted
            loop={true}
            playsInline
            preload="auto"
            src="https://res.cloudinary.com/demo/video/upload/q_auto,vc_av1/wxo4blppvc14jgm5iaih.webm"
          ></video>
          <div className="absolute max-w-[40%] left-0 top-20 align-center justify-start flex-col">
            <img
              src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678677552/rickandmorty/ers4477-dejzedo-pre-removebg-preview_s2n7ll.webp"
              alt="title"
              className="w-80 md:mt-0 md:w-[800px] flex m-auto h-50 object-cover"
            />
          </div>
          <Layout />
        </div>
      </main>
    </div>
  );
};

export default RickAndMortyPage;
