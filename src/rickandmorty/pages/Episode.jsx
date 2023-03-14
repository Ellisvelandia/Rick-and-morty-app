import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CardEpisode } from "../components/episodes/CardEpisode";
import logo from "/assets/logo.webp";

const Episode = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => setEpisodes(res.data.results));
  }, []);

  console.log(episodes);

  return (
    <div className="my-8">
      <Link to="/home" className="lg:w-auto w-full inline-flex justify-center">
        <img src={logo} alt="logo" className="md:w-80 w-60" />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
        {episodes.map((episode) => {
          return <CardEpisode episode={episode} key={episode.id} />;
        })}
      </div>
    </div>
  );
};

export default Episode;
