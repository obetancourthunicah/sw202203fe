import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AppState {
  appLoaded: boolean;
}

const initialState: AppState = {
  appLoaded: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppLoaded: (state, action: PayloadAction<boolean>) => {
      state.appLoaded = action.payload;
    }
  }
});

export const { setAppLoaded } = appSlice.actions;
export const selectAppLoaded = (state: RootState) => state.app.appLoaded;
export default appSlice.reducer;
