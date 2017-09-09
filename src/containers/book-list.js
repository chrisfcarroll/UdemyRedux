import React, {Component} from 'react';
import {connect} from 'react-redux';
import selectBook from "../actions/select-book";
import {bindActionCreators} from 'redux';

class BookList extends Component {

  render(){
    return (!this.props.bookList)
      ? (<div>(no books)</div>)
      : (<ul className="list-group col-sm-4">
          {this.renderList()}
         </ul>);
  }

  renderList(){
    return (this.props.bookList.map(book=>
      (<li key={book.title} className="list-group-item"
           onClick={ ()=>this.props.selectBook(book) } >
          {book.title}
        </li>)
    ))
  }
}

const mapStateToProps = (state) => ({bookList:state.bookList});
const mapDispatchToProps= (dispatch)=> bindActionCreators({selectBook:selectBook}, dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(BookList);
