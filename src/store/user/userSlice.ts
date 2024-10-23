import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

export const userSlice = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    login: (_, action: PayloadAction<User>) => {
      return action.payload;
    },

    logout: (_) => {
      return null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
