import { Routes, Route } from "react-router-dom";
import LoginRickAndMorty from "../auth/pages/LoginRickAndMorty";
import RickAndMortyPage from "../rickandmorty/pages/RickAndMortyPage";

const RickAndMortyRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginRickAndMorty />} />
      <Route path="/*" element={<RickAndMortyPage />} />
    </Routes>
  );
};

export default RickAndMortyRoutes;
