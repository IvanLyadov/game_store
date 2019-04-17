import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
  render() {
    return (
      <div>
        <Navbar className="ncst_nav" light expand="md">
          <Container>
            <NavbarBrand href="/">
              <img src={require(`../assets/images/logo.png`)}></img>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar className="cst_drpbtn">
                  <DropdownToggle nav caret className="cst-cart">
                    <img src={require(`../assets/images/cart_icon.png`)}></img>
                    <span>
                      3
                    </span>
                  </DropdownToggle>
                  <DropdownMenu right className="cst_dropdown">
                    <DropdownItem header className="cst-dropdown-header">
                      <span className="cart-header">
                        2 items in cart
                      </span>
                      <span className="cart-action">
                        <span className="cart-price">
                          9.99$
                        </span>
                        <Button className="cst-clear-cart">
                          Clear Cart
                        </Button>
                      </span>

                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header className="cart-product-item">
                      <span className="cart-title-items">
                        <img src={require(`../assets/images/product_img/assasin.png`)}></img>
                        <span className="cart-title-name">
                          <span className="cart-title-item">Lorem ipsum</span>
                          <a>Remove</a>
                        </span>
                      </span>
                      <span className="cart-price-item">
                        9.99$
                      </span>
                    </DropdownItem>
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
