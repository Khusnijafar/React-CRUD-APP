import React, { Component } from 'react'
import Books from '../tempList'
import { Container, Row, Col, CardImg, CardBody, Card } from 'reactstrap';
import '../BookList.css'

function text(text) {
    if (text.length > 25) {
      let textSplit = text.substr(0, 25)
      return `${textSplit} ...`
    } else {
      let textSplit = text
      return `${textSplit}`
    }
}

class List extends Component {
    constructor() {
      super();
      this.state = { book: Books};
    }
    render() {
      return(
      <Container>
       <Row>
        {this.state.book.map((item) =>
        <Col md="3">
          <div className="list">
            <Card>
                <div>
                  <a href={'/book/' + item.book_id}>
                    <CardImg img
                      className="img" height="400px"
                      src={item.image_url}
                      alt="gambar"/>
                    <CardBody>
                    <p className="font">{text(item.title)} </p>
                    </CardBody>
                  </a>
                </div>
            </Card>
          </div>
        </Col>
        )}
       </Row>
       </Container>
      )
   }
}

export default List
