import { createSlice } from "@reduxjs/toolkit";

const isAuthenticatedFromLocalStorage =
  localStorage.getItem("isAuthenticated") === "true";

const initialState = {
  email: "",
  firstName: "",
  image: "",
  lastName: "",
  _id: "",
  isAuthenticated: isAuthenticatedFromLocalStorage,
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state._id = action.payload.data._id;
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(action.payload.data));
      localStorage.setItem("isAuthenticated", "true");
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.image = "";
      state.isAuthenticated = false;

      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;
