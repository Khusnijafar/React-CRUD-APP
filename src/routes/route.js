import React, {Component} from 'react';
import BookSearch from '../components/BookSearch';
import BookDetail from '../components/BookDetail';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { Route , BrowserRouter as Router } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
        <div>
        <Router>
          <Route exact path={"/"} component={Navbar}/>
          <Route exact path={"/"} component={BookSearch}/>
          <Route exact path={"/"} component={Button}/>
          <Route exact path={"/:book_id"} component={BookDetail}/>
        </Router>
        </div>
    );
  }
};

export default Routes
