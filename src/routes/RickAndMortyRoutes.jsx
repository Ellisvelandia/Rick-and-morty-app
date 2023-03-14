import { Routes, Route } from "react-router-dom";
import LoginRickAndMorty from "../auth/pages/LoginRickAndMorty";
import Signup from "../auth/pages/Signup";
import RickAndMortyPage from "../rickandmorty/pages/RickAndMortyPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginRickAndMorty />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<RickAndMortyPage />} />
      <Route path="/*" element={<LoginRickAndMorty />} />
    </Routes>
  );
};

export default AuthRoutes;
