import { createSlice } from "@reduxjs/toolkit";
import { InitialProps, ItemsProps } from "../types/RootState";

const initialState: InitialProps = {
  items: [],
  error: { message: "", status: false },
  loading: false,
};

const shortLinkSlice = createSlice({
  name: "shortlink",
  initialState,
  reducers: {
    storedDataStorage(state, action) {
      state.items = action.payload;
    },

    addItemToData(state, action) {
      const { shortUrl, longUrl } = action.payload;
      const existingData = state.items.find(
        (item: ItemsProps) => item.shortUrl === shortUrl
      );
      if (!existingData) {
        const newItem: ItemsProps = { id: +new Date(), shortUrl, longUrl };
        state.items.push(newItem);
      }
      if (state.items.length > 3) {
        state.items.shift();
      }
    },

    changeStateError(state, action) {
      const { message, status } = action.payload;
      state.error.message = message;
      state.error.status = status;
    },

    changeStateLoading(state, action) {
      const loading = action.payload;
      state.loading = loading;
    },
  },
});

export const shortlinkActions = shortLinkSlice.actions;

export default shortLinkSlice;
