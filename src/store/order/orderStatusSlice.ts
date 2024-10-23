import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderStatus } from "../../types/Order";

const initialState: OrderStatus[] = [];

export const orderStatusSlice = createSlice({
  name: "orderStatus",
  initialState,
  reducers: {
    setOrderStatus: (_, action: PayloadAction<OrderStatus[]>) => {
      return action.payload;
    },
  },
});
