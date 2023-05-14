import { createSlice, Dispatch } from '@reduxjs/toolkit';

import { IAppThunk, IReducer } from 'store/types';
import { IAppStore } from 'types';

const initialState: IAppStore = {
    isAppLoading: false,
    isLogged: true,
};

export const isLoggedReducer: IReducer<IAppStore, boolean> = (
    state,
    action,
) => {
    state.isLogged = action.payload;
};

export const isAppLoadingReducer: IReducer<IAppStore, boolean> = (
    state,
    action,
) => {
    state.isAppLoading = action.payload;
};

const appSlice = createSlice({
    name: 'AppSlice',
    initialState,
    reducers: {
        isLogged: isLoggedReducer,
        isAppLoading: isAppLoadingReducer,
    },
});

const { isLogged: setIsLoggedAction, isAppLoading: setisAppLoadingAction } =
    appSlice.actions;

export const setIsLogged = (isLogged: boolean): IAppThunk => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoggedAction(isLogged));
    };
};

export const setIsAppLoading = (isAppLoading: boolean): IAppThunk => {
    return (dispatch: Dispatch) => {
        dispatch(setisAppLoadingAction(isAppLoading));
    };
};

export default appSlice.reducer;
