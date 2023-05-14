import {
    ThunkAction,
    Action,
    CaseReducer,
    PayloadAction,
} from '@reduxjs/toolkit';

import store from 'store';

export type IRootState = ReturnType<typeof store.getState>;
export type IAppThunk<IReturnType = void> = ThunkAction<
    IReturnType,
    IRootState,
    unknown,
    Action<string>
>;
export type IDispatch = typeof store.dispatch;
export type IReducer<T, K = any> = CaseReducer<T, PayloadAction<K>>;
export type T_PayloadAction = PayloadAction;
