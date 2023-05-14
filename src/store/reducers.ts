import { combineReducers } from '@reduxjs/toolkit';

import appReducer from './appStore/reducer';
import userDataReducer from './userStore/reducer';

export default combineReducers({
    appReducer,
    userDataReducer,
});
