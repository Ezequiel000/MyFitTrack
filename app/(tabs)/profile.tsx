import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useAppDispatch, useAppSelector } from '../hooks';
import {useState} from 'react'
import { User } from 'firebase/auth';




export default function ProfileScreen() {

  const user  = useAppSelector((state) => state.user.currentUser)
  const uid = user ? user.uid : ''
  const email = user ? user.email : ''


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text> My UID : {uid}</Text>
      <Text> My UID : {email}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
