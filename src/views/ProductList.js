import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

class ProductList extends React.Component {
 //  constructor(props, context) {
 //   super(props, context);
 // }

  render() {
    let {data} = this.props.data;
    console.log(data);

    return (
      <div className="cart-wrapper">
        <Row>
          {
            data.map((obj, ix) => {
              return (
                <Col >
                  <Card>
                    <CardImg top width="100%" src={require(`../assets/images/product_img/${obj.img}`)} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>
                          {
                            obj.title
                          }
                      </CardTitle>
                      <div className="cst-btn-wrapper">
                          {
                          obj.discount ? (
                            <Button>
                                {
                                  obj.discount
                                }
                            </Button>
                          ) : null
                        }

                        <Button>
                            {
                              obj.price
                            }
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </div>
    );
  }

};

export default ProductList;
