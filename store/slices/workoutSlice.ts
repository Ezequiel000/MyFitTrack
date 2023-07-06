import {PayloadAction,createSlice} from '@reduxjs/toolkit';
import type {UserState} from '../../types';
import type { Exercise, WorkingSet, Workout } from '../../types';
import { useAppSelector } from '../../app/hooks';
import { createElement } from 'react';

const uid = useAppSelector((state)=>state.user.uid) 


const initialState : Workout = {
    date: null,
    excrcises: null,
    ownerId:  '',
    workoutVolume: 0,
    targets: []

}

const workoutSlice = createSlice({
name: 'workout',
initialState,
reducers:{ 
    addExcercise(){

    },
    deleteExcercise(){
        
    }    




}

})