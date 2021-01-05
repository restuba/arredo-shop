import { thunk, createStore, combineReducers, applyMiddleware, composeWithDevTools } from 'libraries';
import { product } from './product/reducer';

// reducer
export const reducer = combineReducers({
  product
});

// store
export const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk))
);

// dispatcher
export * from './product/action';

// selector
export * from './product/selector';