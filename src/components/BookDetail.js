import React, {Component} from 'react';
import Navbar from './Navbar';
import Books from '../db/tempList';
import {Link} from 'react-router-dom';
import {Jumbotron, Modal, Form, ModalHeader, ModalBody, FormGroup, Label, Col, Input, ModalFooter, Button} from 'reactstrap';
import '../BookDetail.css';
import swal from 'sweetalert';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      params_id: props.match.params.book_id,
      modal: false,
      redirect: false,
      book_id: "",
      title: "",
      image_url: "",
      description: "",
      created_at: "",
      updated_at: "",
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  componentWillMount() {
    let dataBook = Books[this.state.params_id];
    this.setState({
      book_id: dataBook.book_id,
      title: dataBook.title,
      image_url: dataBook.image_url,
      description: dataBook.description,
      created_at: dataBook.created_at,
      updated_at: dataBook.updated_at,
    })
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
  changeUrl = (event) => {
    this.setState({image_url: event.target.value})
  }
  changeTitle = (event) => {
    this.setState({title: event.target.value})
  }
  changeDescription = (event) => {
    this.setState({description: event.target.value})
  }
  updateFinish = (e) => {
    e.preventDefault();
    swal({
      title: "Update",
      text: "Data has been updated",
      icon: "success",
      button: "oke",
    })
  }
  prosesEdit = (event) => {
    event.preventDefault()
    let stateData = this.state.data
    let data = {
        title: this.state.inputTitle,
        description: this.state.description,
        image_url: this.state.image_url,
        created_at: Date(),
        updated_at: Date(),
    }
    stateData = [...stateData, data]
    this.setState({
        data: stateData,
        inputTitle: "",
        inputImageUrl: "",
        inputDescription: "",
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron className="header-book">
          <div className="button-detail">
            <a href="#" onClick={this.toggle}><h3>Edit</h3></a>
              <Link to={'/?delete=' + this.state.book_id} onClick={() => { if (window.confirm('Do you want to delete this item?')) this.deleteBook() }}><h3>Delete</h3></Link>
          </div>
          <div className="header-book">
            <img src={this.state.image_url} width="100%" alt="" />
          </div>
        </Jumbotron>
        <div className="book-child">
          <img src={this.state.image_url} alt="" width="200px" className="img-mini" />
        </div>
        <Jumbotron className="book-description">
          <h2>{this.state.title}</h2>
          <h4>{this.state.created_at}</h4>
          <br /><br />
          <p>{this.state.description}</p>
        </Jumbotron>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <Form onSubmit={this.updateFinish}>
              <ModalHeader toggle={this.toggle}>Edit Data</ModalHeader>
              <ModalBody>
                  <FormGroup row>
                      <Label sm={3} size="lg">Image URL</Label>
                      <Col sm={9}>
                        <Input type="text" name="" id="" placeholder="Url Image..." bsSize="lg" value={this.state.image_url} onChange={this.changeUrl} />
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Label sm={3} size="lg">Title</Label>
                      <Col sm={9}>
                        <Input type="text" name="" id="" bsSize="lg" value={this.state.title} onChange={this.changeTitle} />
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Label sm={3} size="lg">Description</Label>
                      <Col sm={9}>
                        <Input type="textarea" name="" id="" value={this.state.description} onChange={this.changeTitle} />
                      </Col>
                  </FormGroup>
              </ModalBody>
              <ModalFooter>
                  <Button type="submit" color="primary" onClick={this.toggle}>Save</Button>
              </ModalFooter>
            </Form>
          </Modal>
        </div>
      </div>
    )
  }
}
export default BookDetail;
