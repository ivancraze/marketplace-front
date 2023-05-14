import { IRootState } from '../types';

export const selectFavorites = (state: IRootState) => state.favoritesReducer;
