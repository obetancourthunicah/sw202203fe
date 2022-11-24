import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface ICredentials{
  email: string;
  password: string;
}


export interface IUser {
  email: string;
  name: string;
  avatar?: string;
  _id: string;
}
export interface IUserWithToken extends IUser {
  token: string;
}

const initialState: IUserWithToken = {
  name: "",
  email: "",
  avatar: "",
  token: "",
  _id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   setUserData: (state, action: PayloadAction<IUserWithToken>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.token = action.payload.token;
      state._id = action.payload._id;
   },
   resetUserData: (state) => {
      state.name = "";
      state.email = "";
      state.avatar = "";
      state.token = "";
      state._id = "";
   }
  },
});

export const { setUserData , resetUserData } = userSlice.actions;
export const selectAuth = (state: RootState) => state.user;
export default userSlice.reducer;
