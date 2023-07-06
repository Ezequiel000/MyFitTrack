import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    UserCredential,
  } from "firebase/auth";
  import { getDatabase, ref, set, DatabaseReference } from "firebase/database";
  import { appAuth as auth , app} from "./firebase-config";
  
  
  const database = getDatabase(app);
  
  export async function createUser(email: string, password: string): Promise<UserCredential['user']> {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
      // Save user data to Firebase Realtime Database
      await set(ref(database, `users/${user.uid}`), {
        email: email,
        // Add any other user data you'd like to store here
      });
  
      return user;
    } catch (error: any) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
  
  export async function login(email: string, password: string): Promise<UserCredential['user']> {
    try {
      console.log('The email used:',email);
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
      // const token: string = await getIdToken(user);
      // return token;

    } catch (error: any) {
      console.error("There was an error with the auth-firebase.ts login fumction:", error);
      throw error;
    }
  }
  
  export async function logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error("Error signing out:", error);
      throw error;
    }
  }
  