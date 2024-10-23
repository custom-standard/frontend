import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../types/Category";

const initialState: Category[] = [];

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (_, action: PayloadAction<Category[]>) => {
      return action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
