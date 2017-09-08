export default function(previousSubstate=null, action){

  switch(action.type){
    case 'BOOK_SELECTED' : return action.payload;
    default: return previousSubstate;
  }

}
