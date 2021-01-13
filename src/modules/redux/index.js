import { thunk, createStore, combineReducers, applyMiddleware, composeWithDevTools } from 'libraries';
import { product } from './product/reducer';
import { profile } from './profile/reducer';
import { popup } from './popup/reducer';
import { notification } from './notification/reducer';

// reducer
export const reducer = combineReducers({
  product,
  profile,
  popup,
  notification
});

// store
export const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk))
);

// dispatcher
export * from './product/action';
export * from './profile/action';
export * from './popup/action';
export * from './notification/action';

// selector
export * from './product/selector';
export * from './profile/selector';
export * from './popup/selector';
export * from './notification/selector';