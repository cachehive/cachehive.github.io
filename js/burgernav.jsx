import React from 'react';
import ReactDOM from 'react-dom';
//import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
//import Modal from 'react-modal';
//import Play from './play';

class BurgerNav extends React.Component {
	constructor(props) {
      super(props);
      this.onSelect = this.onSelect.bind(this);
      this.toggleNav = this.toggleNav.bind(this);
      // this.state = {navExpanded: false};
    }

    onSelect(e){
        console.log('OnSelect')
        // console.log(this.state.navExpanded);
        // this.setState({navExpanded: false});
    }

    toggleNav(){console.log('toggle...')};

    // <Navbar inverse fixedTop toggleNavKey={0} navExpanded={this.state.navExpanded} onToggle={() => this.toggleNav()}>
    // <Navbar inverse fixedTop toggleNavKey={0} navExpanded={this.state.navExpanded} >

    

    render() {
        return (
        	<div> 
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">cachehive.com</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Action</MenuItem>
                      <MenuItem eventKey={3.2}>Another action</MenuItem>
                      <MenuItem eventKey={3.3}>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                    <NavItem eventKey={1} href="#">Link Right</NavItem>
                    <NavItem eventKey={2} href="#">Link Right</NavItem>
                  </Nav>
                </Navbar.Collapse>
                </Navbar>
          </div>
          
 
        );
    }
}

export default BurgerNav;