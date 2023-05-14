import { IRootState } from 'store/types';

export const selectIsLogged = (state: IRootState) => state.appReducer.isLogged;
export const selectIsAppLoading = (state: IRootState) =>
    state.appReducer.isAppLoading;
