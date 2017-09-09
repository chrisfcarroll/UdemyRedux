import * as actiontype from '../actions/select-book';

export default function(previousSubstate=null, action){

  switch(action.type){
    case actiontype.BOOK_SELECTED : return action.payload;
    default: return previousSubstate;
  }

}
