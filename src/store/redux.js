import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  
  const persistedReducer = persistReducer(persistConfig, appSlice)

export const store = configureStore({
  reducer: {
    app : persistedReducer
  },
})


export const persistor = persistStore(store)