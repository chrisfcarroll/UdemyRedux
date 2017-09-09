import { combineReducers } from 'redux';
import reducerChain from 'reducer-chain'
import BookListReducer from './book-list-reducer';
import ActiveBookReducer from './active-book-reducer';

function loggingReducer(state=null,action){console.log(state);console.log(action);return state;}

const rootReducer = reducerChain([
  loggingReducer,
  combineReducers({
    bookList : BookListReducer,
    activeBook : ActiveBookReducer,
  })
]);

export default rootReducer;
