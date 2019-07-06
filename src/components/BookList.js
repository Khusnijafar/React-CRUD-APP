import React, { Component } from 'react'
import { Container, Row, Col, CardImg, CardBody, Card } from 'reactstrap';
import '../BookList.css'


function text(text) {
    if (text.length > 25) {
      let textSplit = text.substr(0, 20)
      return `${textSplit} ...`
    } else {
      let textSplit = text
      return `${textSplit}`
    }
}

class BookList extends Component {
    render() {
      return(
      <Container>
       <Row>
        {this.props.listBook.map((item, index) =>
        <Col md={3}>
          <div className="list">
            <Card>
                <div>
                  <a href={'/' + index}>
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

export default BookList
