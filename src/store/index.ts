import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import categorySlice from "./category/categorySlice";
import orderStatusSlice from "./order/orderStatusSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    categorySlice,
    orderStatusSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
