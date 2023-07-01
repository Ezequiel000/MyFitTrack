
import { useState, useContext } from "react";
import { login } from "../../utils/auth-firebase";
import { Alert } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setToken } from "../../store/slices/userSlice"; 
// import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { Text, View } from '../../components/Themed'


function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);


  const dispatch = useAppDispatch();


  async function loginHandler(email: string, password: string  ) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      if (token) {
        dispatch(setToken(token))
        
        
      } else {
        setIsAuthenticating(false);
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


  return(
    <View>

      <Text>
        This is the Login page. Hello
      </Text>
    </View>
    
    
  );

};

export default LoginScreen;
