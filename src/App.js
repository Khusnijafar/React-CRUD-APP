import React, {Component} from 'react';
import BookList from './Components/BookList';
import BookSearch from './Components/BookSearch';
import BookDetail from './Components/BookDetail';
import Navbar from './Components/Navbar';
import Button from './Components/Button';
import Books from './tempList';
import { Route , BrowserRouter as Router } from "react-router-dom";

class MyApp extends Component {
  constructor() {
    super()
    this.state = Books
  }

  render() {
    return (
        <div>
        <Router>
          <Route exact path={"/"} component={Navbar}/>
          <Route exact path={"/"} component={BookSearch}/>
          <Route exact path={"/"} component={Button}/>
          <Route exact path={"/"} render={() => <BookList books={this.state}/>} />
          <Route exact path={"/book/:book_id"} component={BookDetail}/>
        </Router>
        </div>
    );
  }
};


export default MyApp
