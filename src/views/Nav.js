import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Container,
  Button,
  DropdownItem } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  clearCartHandel = () => {
    this.props.data.data.clearCart();
  }

  clearItemById = (id) => {
    this.props.data.data.clearCartItemById(id);
  }

  render() {
    let {data} = this.props.data;

    let cart_items = data.data.filter(
      function(e) {
        return this.indexOf(e.id) !== -1;
      },
      data.cart
    );
    let total_price = 0;
    if (cart_items.length !== 0) {
      total_price = cart_items.reduce(function(accumulator, currentValue){
        return accumulator + currentValue.price
      },0);
    }

    return (
      <div>
        <Navbar className="ncst_nav" light expand="md">
          <Container>
            <NavbarBrand href="/">
              <img src={require(`../assets/images/logo.png`)} alt="Logo"></img>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar className="cst_drpbtn">
                  <DropdownToggle nav caret className="cst-cart">
                    <img src={require(`../assets/images/cart_icon.png`)} alt="Cart"></img>
                    <span>
                      {cart_items.length !== 0 ? cart_items.length : null}
                    </span>
                  </DropdownToggle>
                  <DropdownMenu right className="cst_dropdown">
                    <DropdownItem header className="cst-dropdown-header">
                      <span className="cart-header">
                        {cart_items.length} items in cart
                      </span>
                      <span className="cart-action">
                        <span className="cart-price">
                          {total_price}$
                        </span>
                        <Button className="cst-clear-cart" onClick={this.clearCartHandel} disabled={cart_items.length === 0 ? true : null}>
                          Clear Cart
                        </Button>
                      </span>
                    </DropdownItem>
                    <DropdownItem divider />
                    {
                      cart_items.map((obj, ix)=>{
                        return(
                          <DropdownItem header className="cart-product-item" key={ix}>
                            <span className="cart-title-items">
                              <img src={require(`../assets/images/product_img/${obj.img}`)} alt={obj.title}></img>
                              <span className="cart-title-name">
                                <span className="cart-title-item">{`${obj.title.substring(1, 25)}${obj.title.length > 25  ? "...": ""}`}</span>
                                <span className="remove-trigger" onClick={()=>{this.clearItemById(obj.id)}}>Remove</span>
                              </span>
                            </span>
                            <span className="cart-price-item">
                              {`$${obj.price}`}
                            </span>
                          </DropdownItem>
                        )
                      })
                    }
                    <DropdownItem divider />
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
