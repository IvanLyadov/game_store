import React from 'react';
import ProductList from './ProductList';
import Nav from './Nav';
import main_banner from '../assets/images/witcher.png';
import { Container, Card, CardImg, Col } from 'reactstrap';

class Main extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div>
        <Nav data={this.props}/>
        <Container>
          <Col className="cst-text-col">
            <h5 className="text-banner">
              Game of the week
            </h5>
          </Col>
          <Card className="main_banner">
            <CardImg top width="100%" src={main_banner} alt="Card image cap" />
          </Card>
          <ProductList data={this.props}/>
        </Container>
    </div>
    );
  }
}

export default Main;
