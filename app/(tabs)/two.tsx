import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useAppDispatch, useAppSelector } from '../hooks';
import {useState} from 'react'
import { changeName } from '../../store/slices/userSlice';

export default function TabTwoScreen() {
  const name = useAppSelector((state) => (state.user.name))
  const dispatch = useAppDispatch()
  const [nom, setNom] = useState(name)


  const handleNameChange = () => {
    dispatch(changeName(nom))
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Text>My name is : {name}</Text>
      <input value= {name} onChange={(e)=> setNom(e.target.value)}/>

      <button onClick={handleNameChange}> Change name </button>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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
