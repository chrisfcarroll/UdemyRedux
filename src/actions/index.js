export function selectBook(book){
  console.log(book , "has been selected");

  return {type:'BOOK_SELECTED', payload:book};
}