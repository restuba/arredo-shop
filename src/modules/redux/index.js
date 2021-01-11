import { thunk, createStore, combineReducers, applyMiddleware, composeWithDevTools } from 'libraries';
import { product } from './product/reducer';
import { profile } from './profile/reducer';

// reducer
export const reducer = combineReducers({
  product,
  profile
});

// store
export const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk))
);

// dispatcher
export * from './product/action';
export * from './profile/action';

// selector
export * from './product/selector';
export * from './profile/selector';