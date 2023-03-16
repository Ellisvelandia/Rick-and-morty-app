import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { videos } from "./data";

const EpisodeVideo = () => {
  const [episodes, setEpisodes] = useState({ videoUrl: "" });

  const { id } = useParams();

  let { name } = episodes;

  useEffect(() => {
    const fetchSingleEpisode = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/episode/${id}`
        );
        const data = await res.json();
        setEpisodes({
          ...data,
          videoUrl: videos.find((video) => video.id === parseInt(id)).video,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleEpisode();
  }, [id]);

  return (
    <div className="relative md:h-auto min-h-screen w-full flex flex-col justify-center text-center">
      <h1 className="text-white inline-flex items-center mt-1 justify-center w-full m-0 md:text-5xl text-xl">
        Episode: {name}
      </h1>
      <div className="w-full relative">
        <iframe
          className="aspect-video h-full lg:my-1 my-8 px-2 lg:p-20 w-full"
          width="100%"
          loading="lazy"
          height="500"
          scrolling="no"
          frameBorder="0"
          src={episodes.videoUrl}
          allowFullScreen="allowfullscreen"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
      <div className="w-full flex justify-center mt-2">
        <Link
          to="/episode"
          className="flex mb-4 bg-[#166a74] w-28 py-2 justify-center px-6 rounded text-white hover:bg-cyan-600 transition-all duration-200 active:scale-90 cursor-pointer"
        >
          &larr; Back
        </Link>
      </div>
    </div>
  );
};

export default EpisodeVideo;
