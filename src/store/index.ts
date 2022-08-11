import {
  combineReducers,
  createStore,
  applyMiddleware,
  AnyAction,
} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import reducers from './reducers/';

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
