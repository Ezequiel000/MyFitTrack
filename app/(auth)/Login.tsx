
import { useState, useContext } from "react";
import { login } from "../../utils/auth-firebase";
import { getIdToken } from "firebase/auth";
import { Alert } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks";
import { loginUser} from "../../store/slices/userSlice"; 
// import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { Text, View } from '../../components/Themed'
import AuthContent from "../../components/ui/AuthContent";
import { useRouter } from "expo-router";
import type { AuthenticationData } from "../../types";


function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useAppDispatch();

  async function loginHandler({email, password}: AuthenticationData  ) {
    setIsAuthenticating(true);
    try {
      const user = await login(email, password);
      const token = await user.getIdToken()
      
      if (token) {
        dispatch(loginUser(token))
        setIsAuthenticating(false)
        
      } else {
        setIsAuthenticating(false)
        Alert.alert(
          "Authentication failed!",
          "Please check your credentials.",
          [{ text: "Okay" }]
        );
      }
    } catch (error) {
      setIsAuthenticating(false);
      Alert.alert("Authentication failed!", "Please check your credentials.", [
        { text: "Okay" },
      ]);
    }
  }

  return( <AuthContent isLogin onAuthenticate={loginHandler} />);

};

export default LoginScreen;
