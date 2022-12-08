import { SET_EXAMPLE } from '@/store/reducers/example/actionTypes';

export type T_Example = {
	name: string;
	age?: number;
};

export type T_ExampleState = {
	name: T_Example['name'];
	age: T_Example['age'];
};

// Types of action types
export type T_SET_EXAMPLE = typeof SET_EXAMPLE;

// Types of actions
export type T_setExample = {
	type: T_SET_EXAMPLE;
	payload: T_Example;
};

// Combined type of actions
export type T_ExampleActions = T_setExample;
