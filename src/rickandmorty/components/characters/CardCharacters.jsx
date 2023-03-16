import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/appContext";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const CardCharacters = ({ character }) => {
  let { name, image } = character;
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((character) => character.id === id);
    return boolean;
  };

  return (
    <>
      <div className="my-2 p-4 rounded text-center bg-[#166a74] text-white text-lg hover:bg-cyan-600 drop-shadow-2xl cursor-pointer">
        <h3>{name}</h3>
        <Link to={`/card/${character.id}`}>
          <img
            src={image}
            alt={name}
            className="w-full md:h-64 my-4 rounded object-fill"
            loading="lazy"
          />
        </Link>
        <div>
          {favoritesChecker(character.id) ? (
            <button onClick={() => removeFromFavorites(character.id)}>
              <span className="inline-flex items-center gap-1">
                <AiFillStar />
                Remove from Favorites
              </span>
            </button>
          ) : (
            <button onClick={() => addToFavorites(character)}>
              <span className="inline-flex items-center gap-1">
                <AiOutlineStar />
                Add to Favorites
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CardCharacters;
