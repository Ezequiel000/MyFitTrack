import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import EditScreenInfo from '../../components/EditScreenInfo';
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function LandingPage() {

return (
 
  <View style={styles.container}>
     <Link href="/Login" asChild>
      <Pressable>{({ pressed }) => <Text style={styles.title}>Login</Text>}</Pressable>
    </Link>
    <Link href="/SignUp" asChild>
      <Pressable>{({ pressed }) => <Text style={styles.title}>SignUp</Text>}</Pressable>
    </Link>

  <View style={styles.separator} />
</View>

);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

