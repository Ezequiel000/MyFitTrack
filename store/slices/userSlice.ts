import {PayloadAction,createSlice} from '@reduxjs/toolkit';
import type {UserState} from '../../types';


const initialState= {
    uid: '',
    name: 'joe doe',
    isLoggedIn: false,
  };
  
export const userSlice = createSlice({
      name: "user",
      initialState,
      reducers: {
        login(state, action: PayloadAction<UserState>){
          state.uid = action.payload.uid;
          state.isLoggedIn = true;
        },
        logout(state){
          state.uid = '';
          state.isLoggedIn = false;
        },
        changeName(state, action: PayloadAction<string>){
          state.name = action.payload
        }
      }
  });

export const {login, logout, changeName} = userSlice.actions
    