import { User } from "firebase/auth";

export interface WorkingSet{
    reps: number;
    weight: number; 

}

export interface Exercise{
    name: string;
    target: string;
    sets: WorkingSet[];

}

export interface Workout{
    date: Date;
    excrcises: Exercise | null;
    ownerId: string
}

export interface UserState{
    isLoggedIn: boolean;
    currentUser: User | {};
    
}
export interface AuthenticationData {
    email: string;
    password: string;
  }

 export interface UserData {
    uid: string;
    email: string;
    displayName: string;
   
  }