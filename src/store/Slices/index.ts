import appSliceReducer from "./appSlice";
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  app: appSliceReducer
 });
