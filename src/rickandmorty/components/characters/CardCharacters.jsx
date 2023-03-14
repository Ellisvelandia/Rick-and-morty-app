import { Link } from "react-router-dom";

const CardCharacters = ({ character }) => {
  let { name, image } = character;
  return (
    <>
      <Link to={`/card/${character.id}`}>
        <div className="my-2 p-4 rounded bg-[#166a74] text-white text-2xl hover:bg-cyan-600 drop-shadow-2xl cursor-pointer">
          <h3>{name}</h3>
          <img
            src={image}
            alt={name}
            className="w-full md:h-64 my-4 rounded object-fill"
            loading="lazy"
          />
        </div>
      </Link>
    </>
  );
};

export default CardCharacters;
