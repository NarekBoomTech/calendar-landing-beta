import { SET_EXAMPLE } from '@/store/reducers/example/actionTypes';
import { T_ExampleActions, T_ExampleState } from '@/store/reducers/example/types';

const initialState: T_ExampleState = {
	name: 'Example',
	age: 50
};

export const exampleReducer = (state = initialState, action: T_ExampleActions): T_ExampleState => {
	switch (action.type) {
		case SET_EXAMPLE:
			console.log(action.payload);
			return {
				...state,
				name: action.payload.name
			};
		default:
			return state;
	}
};
