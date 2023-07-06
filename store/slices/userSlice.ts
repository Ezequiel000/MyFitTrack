import {PayloadAction,createSlice} from '@reduxjs/toolkit';
import {logout} from '../../utils/auth-firebase'
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
        logoutUser(state){
          state.token = '';
          state.isLoggedIn = false;
          

        },
        changeName(state, action: PayloadAction<string>){
          state.name = action.payload
        },
        loginUser(state, action: PayloadAction<string>){
          state.token = action.payload
          state.isLoggedIn = true

        },
      }
  });

export const {loginUser, logoutUser, changeName} = userSlice.actions
    