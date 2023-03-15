import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/appContext";

const CardCharacters = ({ character }) => {
  let { name, image } = character;
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((character) => character.id === id);
    return boolean;
  };

  return (
    <>
        <div className="my-2 p-4 rounded bg-[#166a74] text-white text-2xl hover:bg-cyan-600 drop-shadow-2xl cursor-pointer">
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
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addToFavorites(character)}>
                Add to Favorites
              </button>
            )}
          </div>
        </div>
    </>
  );
};

export default CardCharacters;
