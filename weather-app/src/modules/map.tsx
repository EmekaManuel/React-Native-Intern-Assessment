// mapSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Location {
  origin?: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export interface MapState {
  location: Location | null;
}

const initialState: MapState = {
  location: null,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location | null>) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = mapSlice.actions;

export default mapSlice.reducer;
