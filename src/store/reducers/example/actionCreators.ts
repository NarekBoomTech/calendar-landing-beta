import { SET_EXAMPLE } from '@/store/reducers/example/actionTypes';
import { T_Example, T_setExample } from '@/store/reducers/example/types';

export const setExampleName = (name: T_Example['name']): T_setExample => {
	return {
		type: SET_EXAMPLE,
		payload: {
			name
		}
	};
};
