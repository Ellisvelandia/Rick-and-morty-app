import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCharacter() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  let { image, name, species, gender, origin, status, location } = character;

  useEffect(() => {
    const fetchSingleCharacterData = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleCharacterData();
  }, [id]);

  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 p-4 md:grid-cols-2 place-items-center gap-8">
          <article>
            <img
              src={image}
              alt={name}
              className="w-[450px] md:h-[400px] h-[250px] rounded md:mb-0 mb-3"
              loading="lazy"
            />
          </article>
          <article className="w-full md:my-8">
            <h1 className="text-5xl font-bold text-white my-1 md:mb-8 md:text-6xl">
              {name}
            </h1>
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Species: {species}
            </p>
            <p className="text-gray-100 md:my-1 -my-2 text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Gender: {gender}
            </p>
            <p className="text-gray-100 md:my-1 -my-2 text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Origin: {origin && origin.name}
            </p>
            <p className="text-gray-100 md:my-1 -my-2 text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Status: {status}
            </p>
            <p className="text-gray-100 md:my-1 -my-2 text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Location: {location && location.name}
            </p>
          </article>
          <Link
            to="/character"
            className="flex bg-[#166a74] py-2 md:mb-0 justify-center px-6 rounded mt-2 text-white hover:bg-cyan-600 drop-shadow-2xl transition-all duration-200 active:scale-90"
          >
            &larr; Back
          </Link>
        </div>
      </section>
    </>
  );
}
