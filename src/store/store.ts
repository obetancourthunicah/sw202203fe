import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { appSlice } from './Slices/appSlice';
import { userSlice } from './Slices/secSlice';
import { securityApi } from './Services/Security';


export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    user: userSlice.reducer,
    [securityApi.reducerPath]: securityApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(securityApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
