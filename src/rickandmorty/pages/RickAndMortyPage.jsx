import React, { useState, useEffect } from "react";
import Navbar from "../components/header/Navbar";
import VideoIntro from "../components/header/VideoIntro";
import Layout from "../components/layout/Layout";
import Loading from "../components/Loading";

const RickAndMortyPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="text-white h-screen mt-20">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loading />
          </div>
        ) : (
          <div className="w-full flex align-center justify-center h-auto flex-col">
            <VideoIntro />
            <div className="absolute max-w-[40%] left-0 top-20 align-center justify-start flex-col">
              <img
                src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678677552/rickandmorty/ers4477-dejzedo-pre-removebg-preview_s2n7ll.webp"
                alt="title"
                className="w-80 md:mt-0 md:w-[800px] flex m-auto h-50 object-cover"
              />
            </div>
            <Layout />
          </div>
        )}
      </main>
    </div>
  );
};

export default RickAndMortyPage;
