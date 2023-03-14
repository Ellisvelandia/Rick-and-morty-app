import React, { useEffect, useState } from "react";
import poster from "/assets/episodes.webp";
import { Link, useParams } from "react-router-dom";

const EpisodeVideo = () => {
  const [episodes, setEpisodes] = useState({});
  const { id } = useParams();

  let { name } = episodes;

  useEffect(() => {
    const fetchSingleEpisode = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/episode/${id}`
        );
        const data = await res.json();
        setEpisodes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleEpisode();
  }, [id]);

  return (
    <div className="relative md:h-auto min-h-screen w-full flex flex-col justify-center text-center">
      <h1 className="text-white absolute md:top-5 top-20 justify-center w-full m-0 md:text-5xl text-xl">
        Episode: {name}
      </h1>
      <div className="w-full flex justify-center align-center h-screen">
        <video
          src=""
          controls
          width="100%"
          height="100%"
          poster={poster}
          loop
          loading="lazy"
          playsInline
          className="aspect-video h-full md:my-0 my-auto px-2 md:p-20 w-full"
        ></video>
      </div>
      <div className="w-full flex justify-center mt-2">
        <Link
          to="/episode"
          className="md:absolute md:bottom-0 flex mb-4 bg-[#166a74] w-28 py-2 justify-center px-6 rounded text-white hover:bg-cyan-600 transition-all duration-200 active:scale-90 cursor-pointer"
        >
          &larr; Back
        </Link>
      </div>
    </div>
  );
};

export default EpisodeVideo;
