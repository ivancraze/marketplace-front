import { IRootState } from '../types';

export const selectUserData = (state: IRootState) => state.userDataReducer;
