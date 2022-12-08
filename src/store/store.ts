import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducer } from '@/store/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '@/store/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type T_RootState = ReturnType<typeof store.getState>;

export const wrapper = createWrapper(() => store);
