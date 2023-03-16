import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CardEpisode } from "../components/episodes/CardEpisode";
import logo from "/assets/logo.webp";
import Loading from "../components/Loading";

const Episode = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => setEpisodes(res.data.results));
      setLoading(false);
    }, []);

  return (
    <div className="my-8">
      <Link to="/home">
        <div className="h-[200px] relative">
          <img
            src={logo}
            alt="logo rick and morty inline-block"
            className="lg:w-80 w-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width="400"
            height="400"
            loading="lazy"
          />
        </div>
      </Link>
      {loading ? (
        <div className="m-auto flex w-full">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-6">
          {episodes.map((movie) => {
            return <CardEpisode movie={movie} key={movie.id} />;
          })}
        </div>
      )}
      </div>
  );
};

export default Episode;
