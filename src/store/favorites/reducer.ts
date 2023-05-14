import {
    createReducer,
    createAction,
    PayloadAction,
    AnyAction,
} from '@reduxjs/toolkit';

import { IFavorites } from 'types';

const initialState: IFavorites = [];

const addToFavoritesAction = createAction<number>('FAVORITES/add');
const removeToFavoritesAction = createAction<number>('FAVORITES/remove');

const favoritesReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        addToFavoritesAction,
        (state: IFavorites, action: PayloadAction<number>) => {
            return Array.from(new Set([...state, action.payload]));
        },
    );

    builder.addCase(
        removeToFavoritesAction,
        (state: IFavorites, action: PayloadAction<number>) => {
            return state.filter(
                (favoriteId: number) => favoriteId !== action.payload,
            );
        },
    );
});

export const addToFavorites = (favoriteId: number): AnyAction => {
    return addToFavoritesAction(favoriteId);
};

export const removeFromFavorites = (favoriteId: number): AnyAction => {
    return removeToFavoritesAction(favoriteId);
};

export default favoritesReducer;
