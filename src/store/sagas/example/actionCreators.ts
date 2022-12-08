import { SA_EDIT_EXAMPLE_NAME } from '@/store/sagas/example/actionTypes';
import { T_ChangeExampleNameRequest } from '@/store/sagas/example/types';

export const editExampleNameRequested = (
	payload: T_ChangeExampleNameRequest['payload']
): T_ChangeExampleNameRequest => {
	return {
		type: SA_EDIT_EXAMPLE_NAME,
		payload
	};
};
