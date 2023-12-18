import { configureStore } from "@reduxjs/toolkit";
import bookmarksReducer from "./bookmark";
import mapReducer from "./map";

const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
    map: mapReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
