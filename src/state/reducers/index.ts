import cellsReducer from './cellsReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  cells: cellsReducer
});

export default reducers;

//appliyng types to react redux
export type RootState = ReturnType<typeof reducers>
