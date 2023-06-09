
import {combineReducers, configureStore, MiddlewareArray} from '@reduxjs/toolkit';
import {userSlice} from './slices/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage'; //storage for react native
import authMiddleware from './authMiddleware';


const rootReducer = combineReducers({
  user: userSlice.reducer,
})

const persistConfig = {
  key: 'userPersist',
  storage: AsyncStorage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: new MiddlewareArray().concat(authMiddleware, thunk),})

export const persistor = persistStore(store)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch