import React, {Component} from 'react'
import Navbar from './Navbar';
import {Jumbotron, Container } from 'reactstrap';
import Books from '../tempList'
import {Link} from 'react-router-dom'
import './BookDetail.css'
import swal from 'sweetalert';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    data: {},
      book_id: props.match.params.book_id,
      modal: false,
      redirect: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  componentWillMount() {
    Books.forEach(element => {
      if (element.book_id == this.state.book_id) {
        this.setState({ data: element})
      }
    });
  }
  deleteBook() {
        swal({
            title: "Delete !",
            text: "Deleted Success !!",
            icon: "success",
            button: "oke"
        });
        this.state.redirect = true;
    }
    

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron className="header-book">
          <div className="button-detail">
          <a href="" onClick={this.toggle}><h3>Edit</h3></a>
          <Link to={'' + this.state.book_id} onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteBook() }}><h3>Delete</h3></Link>
          </div>
          <div className="header-book">
            <img src={this.state.data.image_url} width="100%" alt="" />
          </div>
        </Jumbotron>
        <div className="book-child">
          <img src={this.state.data.image_url} alt="" width="200px" className="img-mini" />
        </div>
        <Jumbotron className="book-description">
          <h2>{this.state.data.title}</h2>
          <h4>{this.state.data.created_at}</h4>
          <br /><br />
          <p>{this.state.data.description}</p>
        </Jumbotron>
      </div>
    )
  }
}
export default BookDetail;
