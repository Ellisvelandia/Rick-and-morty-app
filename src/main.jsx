import React from "react";
import ReactDOM from "react-dom/client";
import RickAndMortyApp from "./RickAndMortyApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RickAndMortyApp />
    </Provider>
  </React.StrictMode>
);
