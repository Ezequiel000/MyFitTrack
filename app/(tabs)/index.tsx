import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed'
import { useAppSelector } from '../hooks';

export default function TabOneScreen() {
  const name = useAppSelector((state) => (state.user.name))
  const isLoggedIn = useAppSelector(state=>(state.user.isLoggedIn))
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text>  Hello my name is {name} </Text>
      {!isLoggedIn && <Text> I am  NOT logged in</Text>}
      {isLoggedIn && <Text> I am not logged in !!!! </Text>}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
