import { combineReducers } from 'redux';
import { numberReducer } from './mallReducer';

const reducers = combineReducers({
  numberReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
