import { Middleware } from '@reduxjs/toolkit';
import { router } from 'expo-router'; // Your router

const authMiddleware: Middleware<{}> = storeAPI => next => action => {
  if(action.type === 'user/loginUser') {
    router.replace('/profile');
  } else if(action.type === 'user/logoutUser') {
    router.replace('/Login');
  }
  
  return next(action);
}

export default authMiddleware;