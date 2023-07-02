
import { useState, useContext } from "react";
import { login } from "../../utils/auth-firebase";
import { Alert } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks";
import { loginUser} from "../../store/slices/userSlice"; 
// import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { Text, View } from '../../components/Themed'
import AuthContent from "../../components/ui/AuthContent";
import { useRouter } from "expo-router";


function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  async function loginHandler(email: string, password: string  ) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      if (token) {
        dispatch(loginUser(token))
        setIsAuthenticating(false)
        router.push('/')
        
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

  if (isAuthenticating) {
    <View>
      <Text> Loading..........</Text>
    </View>
  }
  return( <AuthContent isLogin onAuthenticate={loginHandler} />);

};

export default LoginScreen;
