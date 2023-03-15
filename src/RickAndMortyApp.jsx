import { BrowserRouter } from "react-router-dom";
import RickAndMortyRoutes from "./routes/RickAndMortyRoutes";
import toast, { Toaster } from "react-hot-toast";
import AppContextProvider from "./context/appContext";
import "./App.css";

const RickAndMortyApp = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <AppContextProvider>
        <RickAndMortyRoutes />
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default RickAndMortyApp;
