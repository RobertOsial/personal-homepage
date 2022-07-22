import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./common/ThemeSwitch/themeSlice";
import homepageReducer from "./features/Homepage/hompageSlice";
import { homepageSaga } from "./features/Homepage/homepageSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    homepage: homepageReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(homepageSaga);

export default store;