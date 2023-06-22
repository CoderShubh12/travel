import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./feature/slice/placeSlice";
import signUpReducer from "./feature/slice/authSlice";
import loginReducer from "./feature/slice/loginSlice";
import logoutReducer from "./feature/slice/logoutSlice";

export const store = configureStore({
  reducer: {
    places: placeReducer,
    auth: signUpReducer,
    login: loginReducer,
    logout: logoutReducer,
  },
});
