import { all, fork } from 'redux-saga/effects';
import { SWA_Example } from '@/store/sagas/example/saga';

export function* rootSaga() {
	yield all([fork(SWA_Example)]);
}
