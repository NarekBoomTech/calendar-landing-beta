import { T_Example } from '@/store/reducers/example/types';
import { SA_EDIT_EXAMPLE_NAME } from '@/store/sagas/example/actionTypes';

export type T_ChangeExampleNameRequest = {
	type: typeof SA_EDIT_EXAMPLE_NAME;
	payload: {
		name: T_Example['name'];
	};
};
