import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';

class BookDetail extends Component {

  render(){
    return (!this.props.activeBook)
      ? (<div>select a book</div>)
      : (<div className="col-sm-4">
          {this.props.activeBook.title}
         </div>);
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

const mapStateToProps = (state) => ({activeBook:state.activeBook});

export default connect(mapStateToProps)(BookDetail);
