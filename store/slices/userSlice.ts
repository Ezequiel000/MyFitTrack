import {PayloadAction,createSlice} from '@reduxjs/toolkit';
import {logout} from '../../utils/auth-firebase'
import { User } from 'firebase/auth';
import type { UserData } from '../../types';



// Your slice's state
interface UserState {
  isLoggedIn: boolean;
  currentUser: User | null;
}

// Define your initial state
const initialState: UserState = {
  isLoggedIn: false,
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser(state) {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
    loginUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const {loginUser, logoutUser} = userSlice.actions
    