import { combineReducers } from 'redux';
import BookListReducer from './book-list-reducer';
import ActiveBookReducer from './active-book-reducer';

const rootReducer = combineReducers({
  bookList : BookListReducer,
  activeBook : ActiveBookReducer
});

export default rootReducer;
