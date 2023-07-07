import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import Button from '../components/ui/Button';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { logoutUser } from '../store/slices/userSlice';
import { useAppDispatch } from './hooks';
import { logout } from '../utils/auth-firebase';

export default function ModalScreen() {

  const dispatch = useAppDispatch()

  function onLogOut(){
    logout()
    dispatch(logoutUser());
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <Button onPress = {onLogOut}> Logout </Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
