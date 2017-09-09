import React, {Component} from 'react';
import {connect} from 'react-redux';
import selectBook from "../actions/select-book";
import {bindActionCreators} from 'redux';

class BookDetail extends Component {

  render(){
    const book = this.props.activeBook;
    return (!book)
      ? (<div>select a book</div>)
      : (<div className="col-sm-4">
          <h3>{book.title}</h3>
          <div>{book.pages}</div>
         </div>);
  }
}


export default connect((state) => ({activeBook:state.activeBook}))(BookDetail);
