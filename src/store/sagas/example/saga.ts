import { all, call, put, takeLatest } from 'redux-saga/effects';
import { R_editExampleName } from 'src/api/example/api';
import { setExampleName } from '@/store/reducers/example/actionCreators';
import { T_Example } from '@/store/reducers/example/types';
import { SA_EDIT_EXAMPLE_NAME } from '@/store/sagas/example/actionTypes';
import { T_ChangeExampleNameRequest } from '@/store/sagas/example/types';

function* SWO_editExampleName({ payload }: T_ChangeExampleNameRequest) {
	try {
		const data: T_Example['name'] = yield call(R_editExampleName, payload.name);

		yield put(setExampleName(data));
	} catch (error) {
		console.log(error);
	}
}

export function* SWA_Example() {
	yield all([takeLatest(SA_EDIT_EXAMPLE_NAME, SWO_editExampleName)]);
}
