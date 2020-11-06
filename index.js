import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AppReducer } from './combineReducer';

// export default function configureStore() {
//   const store = createStore(AppReducer, applyMiddleware(thunk));
//   return store
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(thunk));
const store = createStore(AppReducer, middleware)

export default store;
