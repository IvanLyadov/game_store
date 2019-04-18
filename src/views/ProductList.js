import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';

class ProductList extends React.Component {

 addProductHandler = (id) =>{
   this.props.data.data.addProductToCart(id);
 }

  render() {
    let {data} = this.props.data.data;
    let cart = this.props.data.data.cart;

    return (
      <div className="cart-wrapper">
        <Row>
          {
            data.map((obj, ix) => {
              return (
                <Col key={ix}>
                  <Card className="cst-cart-product">
                    <CardImg top width="100%" src={require(`../assets/images/product_img/${obj.img}`)} alt="Card image cap" />
                    <CardTitle className={`${obj.purchase_status ? "cst-cart-title-purchased" : "cst-cart-title"}`}>
                        {
                          obj.title
                        }
                    </CardTitle>
                    <CardBody className="cst-cart-body">

                      <div className="cst-btn-wrapper">
                        {
                          cart.indexOf(obj.id) !== -1 || obj.purchase_status ? (
                            <Button className="cst-btn-price-disabled" disabled>
                                {obj.purchase_status ? "OWNED" : "IN CART"}
                            </Button>
                          ):(
                            <>
                              {
                                obj.discount ? (
                                  <Button className="cst-btn-sicount">
                                      {
                                        obj.discount
                                      }
                                  </Button>
                                ) : null
                              }
                              <Button className="cst-btn-price" onClick={()=>{this.addProductHandler(obj.id)}}>
                                  {
                                    `$${obj.price}`
                                  }
                              </Button>
                            </>
                          )
                        }

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
