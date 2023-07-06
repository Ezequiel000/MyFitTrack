import { useAppDispatch, useAppSelector } from "../hooks";
import { loginUser } from "../../store/slices/userSlice"; 
import { createUser } from "../../utils/auth-firebase";
import { Text, View } from '../../components/Themed'
import AuthContent from "../../components/ui/AuthContent";
import { useState} from "react";
import { Alert } from "react-native";
import type { AuthenticationData } from "../../types";



function SignupScreen(): JSX.Element {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  async function signUpHandler({ email, password }: AuthenticationData): Promise<void> {
    setIsAuthenticating(true);
    try {
      const user = await createUser(email, password);
      const token = await user.getIdToken();
      dispatch(loginUser(token))
      setIsAuthenticating(false)


      
    } catch (error: any) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again",
        [{ text: "Okay" }]
      );
      setIsAuthenticating(false);
    }
  }

  return <AuthContent isLogin= {false} onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
