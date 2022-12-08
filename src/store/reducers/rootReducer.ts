import { combineReducers } from 'redux';
import { exampleReducer } from '@/store/reducers/example/reducer';

export const rootReducer = combineReducers({
	example: exampleReducer
});
