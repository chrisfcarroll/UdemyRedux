const BOOK_SELECTED='BOOK_SELECTED';
const selectBook = (book) => ({type:BOOK_SELECTED, payload:book});

export default selectBook;
export {BOOK_SELECTED, selectBook};

