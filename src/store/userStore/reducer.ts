import { createReducer, createAction } from '@reduxjs/toolkit';

import { IAppThunk } from '../types';
import { IUserData } from 'types';

const initialState: IUserData = {
    birthDate: null,
    displayName: null,
    email: null,
    gender: null,
    id: null,
    login: null,
    nameFirst: null,
    nameLast: null,
    namePatronymic: null,
    phone: null,
};

const setUserDataAction = createAction<IUserData>('USER_DATA/set');

const userDataReducer = createReducer(initialState, (builder) => {
    builder.addCase(setUserDataAction, (_, action) => action.payload);
});

export const setUserData = (userData: IUserData): IAppThunk => {
    return (dispatch) => {
        dispatch(setUserDataAction(userData));
    };
};

export default userDataReducer;
