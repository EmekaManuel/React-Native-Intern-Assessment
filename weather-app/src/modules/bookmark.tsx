import { LocationProps } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface BookmarkState {
  items: LocationProps[];
  item: LocationProps | null;
}

const initialState: BookmarkState = {
  items: [],
  item: null,
};
export const BookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<LocationProps>) => {
      state.items.push(action.payload);
    },
    removeBookmark: (state, action: PayloadAction<LocationProps>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addBookmark, removeBookmark } = BookmarksSlice.actions;
export default BookmarksSlice.reducer;
