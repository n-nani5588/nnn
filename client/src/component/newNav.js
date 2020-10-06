import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBox } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './newNav.css'

class NavbarPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen: false
            };
    }
        

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar fixed="top" scrolling transparent  dark className="Navbar_New" light expand="md">
        <MDBNavbarBrand className="Nav_brand">
          <strong className="white-text">GENIEE TREASURES</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" className={this.state.isOpen?"navbarCollapse3":""} isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
           
       
            <MDBNavItem>
              {/* <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> */}
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav className="nAV_nAV" right>
          
         
            <MDBNavItem className="Nav_Item">
              <MDBNavLink to="#" onClick={() => this.props.onClick1()}>HOME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="Nav_Item">
              <MDBNavLink to="#" onClick={() => this.props.onClick2()}>ABOUT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="Nav_Item">
              <MDBNavLink to="#" onClick={() => this.props.onClick3()}>BUSSINESS PLAN</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="Nav_Item">
              <MDBBox mt="1" justifyContent="center" alignContent="center">{this.props.Login}</MDBBox>
            </MDBNavItem>
            <MDBNavItem className="Nav_Item">
           
              <MDBBox mt="1" justifyContent="center" alignContent="center">{this.props.Signup}</MDBBox>
            
            </MDBNavItem>
       {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;