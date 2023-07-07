
import { login } from "../../utils/auth-firebase";
import { getIdToken } from "firebase/auth";
import { Alert } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks";
import { loginUser} from "../../store/slices/userSlice"; 
// import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { Text, View } from '../../components/Themed'
import AuthContent from "../../components/ui/AuthContent";
import type { AuthenticationData } from "../../types";


function LoginScreen() {
  const dispatch = useAppDispatch();
  

  async function loginHandler({email, password}: AuthenticationData  ) {
    try {
      const user = await login(email, password);
      
      
      if (user) {
        dispatch(loginUser(user))
        
      } else {
        Alert.alert(
          "Authentication failed!",
          "Please check your credentials.",
          [{ text: "Okay" }]
        );
      }
    } catch (error) {
      Alert.alert("Authentication failed!", "Please check your credentials.", [
        { text: "Okay" },
      ]);
    }
  }

  return( <AuthContent isLogin onAuthenticate={loginHandler} />);

};

export default LoginScreen;
