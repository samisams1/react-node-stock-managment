// src/reducers/rootReducer.ts

import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  login: loginReducer,
  registration: registrationReducer,
});

export default rootReducer;