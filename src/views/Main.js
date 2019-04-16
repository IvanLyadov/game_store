import React from 'react';
import ProductList from './ProductList';
import Nav from './Nav';
import main_banner from '../assets/images/witcher.png';
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Main extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
    };
  }

  render() {
    let {data} = this.props;
    return (
      <div>
        <Nav/>
        <Container>
          <Card className="main_banner">
            <CardImg top width="100%" src={main_banner} alt="Card image cap" />
          </Card>
          <ProductList data={data}/>
        </Container>
    </div>
    );
  }
}

export default Main;
