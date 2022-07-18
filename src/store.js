import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./common/ThemeSwitch/themeSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});