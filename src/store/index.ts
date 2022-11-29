import { configureStore } from "@reduxjs/toolkit";
import shortLinkSlice from "./shortlink-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, shortLink: shortLinkSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
export type AppDispatch = typeof store.dispatch;
