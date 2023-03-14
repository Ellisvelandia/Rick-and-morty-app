import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCharacters from "../components/characters/CardCharacters";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import logo from "/assets/logo.webp";


const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setCharacters(res.data.results);
      setTotalPages(res.data.info.pages);
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
      <Link to="/home" className="lg:w-auto w-full inline-flex justify-center mb-4">
        <img
          src={logo}
          alt="logo rick and morty inline-block"
          className="lg:w-80 w-60"
        />
      </Link>
      <Button nextPage={nextPage} prevPage={prevPage} />
      <div className="grid grid-cols-1 2xl:grid-cols-5 md:grid-cols-3 gap-4 m-6">
        {characters.map((character) => {
          return <CardCharacters character={character} key={character.id} />;
        })}
      </div>
      <Button nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
};

export default Characters;
