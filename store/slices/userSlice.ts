import {PayloadAction,createSlice} from '@reduxjs/toolkit';
import type {UserState} from '../../types';


const initialState: UserState= {
    uid: '',
    name: 'joe doe',
    isLoggedIn: false,
    token: '',

  };
  
export const userSlice = createSlice({
      name: "user",
      initialState,
      reducers: {
        login(state, action: PayloadAction<boolean>){
          state.isLoggedIn = true;
        },
        logout(state){
          state.token = '';
          state.isLoggedIn = false;
        },
        changeName(state, action: PayloadAction<string>){
          state.name = action.payload
        },
        setToken(state, action: PayloadAction<string>){
          state.token = action.payload

        },
      }
  });

export const {login, logout, changeName, setToken} = userSlice.actions
    