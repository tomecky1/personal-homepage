import {configureStore} from "@reduxjs/toolkit";
import themeSlice from "./common/themeSlice.js";
import createSagaMiddleware from 'redux-saga';
import saga from './saga.js';
import personalHomepageSlice from "./features/personalHomepage/personalHomepageSlice.jsx";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalHomepage: personalHomepageSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
