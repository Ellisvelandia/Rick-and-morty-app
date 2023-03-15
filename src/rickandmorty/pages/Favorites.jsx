import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import "../../routes/RickAndMortyRoutes";
import logo from "/assets/logo.webp";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((item) => item.id === id);
    return boolean;
  };

  return (
    <div className="w-full">
      <div className="w-full h-32 text-white flex justify-evenly items-center">
        <Link to="/home">
          <img
            className="md:w-80 w-60 h-28"
            src={logo}
            width="400"
            height="400"
            alt="logo rick and morty"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="favorites">
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <div key={item.id} className="text-white">
              <div>
                <h4>{item.name}</h4>
              </div>
              <Link to={`/card/${item.id}`}>
                <img
                  src={item.image}
                  alt="charters favorites"
                  className="aspect-video"
                />
              </Link>
              <div>
                {favoritesChecker(item.id) ? (
                  <button onClick={() => removeFromFavorites(item.id)}>
                    Remove from Favorites
                  </button>
                ) : (
                  <button onClick={() => addToFavorites(item)}>
                    Add to Favorites
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <h5 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-white tracking-widest">
            You don't have any favorite books yet!
          </h5>
        )}
      </div>
    </div>
  );
};

export default Favorites;
