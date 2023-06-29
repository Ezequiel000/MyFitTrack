
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
    uid: string;
    name: string;
    isLoggedIn: boolean;
    initialize: boolean
}
