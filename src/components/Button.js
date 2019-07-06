import React, {Component} from 'react';
import Books from '../db/tempList';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input, ModalFooter } from 'reactstrap';
import swal from 'sweetalert';

import BookList from './BookList';
import queryString from 'query-string';
class ButtonModal extends Component {
  constructor() {
    super();
    this.state = {
      buku: Books,
      modal: false,
      inputImageUrl: "",
      inputTitle: "",
      inputDescription: "",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  prosesInput = (event) => {
    event.preventDefault()
    let stateData = this.state.buku
    let books = {
      book_id: this.state.book_id,
      image_url: this.state.inputImageUrl,
      title: this.state.inputTitle,
      description: this.state.inputDescription,
    }
    stateData = [...stateData, books]
    this.setState({
      buku:stateData,
      inputImageUrl: "",
      inputTitle: "",
      inputDescription: ""
    })
    swal({
      title: "Insert",
      text: "Insert Success",
      icon: "success",
      button: "oke",
    })

  }

  changeUrl = (event) => {
    this.setState({inputImageUrl: event.target.value})
  }

  changeTitle = (event) => {
    this.setState({inputTitle: event.target.value})
  }

  changeDescription = (event) => {
    this.setState({inputDescription: event.target.value})
  }
  componentDidMount() {
       let query = queryString.parse(this.props.location.search);
       console.log(query);
       console.log("tes");
       if (query.delete) {
           let dataBook =this.state.buku;
           dataBook.splice(query.delete, 1);

           this.setState({
              buku: dataBook
           })
       }
   }
  render() {
    return (
      <div>
        <div className="button-add">
          <Button onClick={this.toggle}>{this.props.buttonLabel}Add</Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
          <Form onSubmit={this.prosesInput}>
            <ModalHeader toggle={this.toggle}><b>Add Data</b></ModalHeader>
              <ModalBody>
                <FormGroup row>
                  <Label for="exampleEmail" sm={3} size="lg">Url Image</Label>
                    <Col sm={9}>
                      <Input type="text" name="urlImage" id="ulrImage" placeholder="Url Image..." bsSize="lg" value={this.state.inputImageUrl} onChange={this.changeUrl} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleEmail" sm={3} size="lg">Title</Label>
                    <Col sm={9}>
                      <Input type="text" name="title" id="title" placeholder="Title..." bsSize="lg" value={this.state.inputTitle} onChange={this.changeTitle} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleEmail" sm={3} size="lg">Description</Label>
                    <Col sm={9}>
                      <Input type="textarea" name="text" id="exampleText" placeholder="Description..." value={this.state.inputDescription} onChange={this.changeDescription} />
                    </Col>
                  </FormGroup>
                </ModalBody>
             <ModalFooter>
              <Button type="submit" color="primary" onClick={this.toggle}><span className="button-save">Save</span></Button>
             </ModalFooter>
            </Form>
        </Modal>
        <BookList listBook={this.state.buku} />
      </div>
    )
  }
}

export default ButtonModal
