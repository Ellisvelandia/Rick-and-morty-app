import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCharacters from "../components/characters/CardCharacters";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import logo from "/assets/logo.webp";
import Loading from "../components/Loading";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setCharacters(res.data.results);
      setTotalPages(res.data.info.pages);
      setLoading(false);
    };

    fetchCharacters();
  }, [page]);

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

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
      <Button nextPage={nextPage} prevPage={prevPage} />
      {loading ? (
        <div className="m-auto flex w-full">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 2xl:grid-cols-5 md:grid-cols-3 gap-4 m-6">
          {characters.map((character) => {
            return <CardCharacters character={character} key={character.id} />;
          })}
        </div>
      )}
      <Button nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
};

export default Characters;
