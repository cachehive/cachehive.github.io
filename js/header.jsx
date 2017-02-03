import React from 'react';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
  			value: null,
		};
		console.log( 'constructor function' );
		
	}
  
	render() {
		return ( 
			<div className="header">
          	    <Navbar>
	                <Navbar.Header>
				    	<Navbar.Brand>
				        	<a href="#">cachehive.com</a>
				      	</Navbar.Brand>
				    </Navbar.Header>
					<Nav pullRight>
				    	<NavDropdown eventKey={3} title="" id="basic-nav-dropdown">
				        	<NavItem eventKey={3.1} href="#about-container">About</NavItem>
				        	<NavItem eventKey={3.2} href="#portfolio-container">Portfolio</NavItem>
				        	<NavItem eventKey={3.3} href="#contact-container">Contact</NavItem>
				      	</NavDropdown>
				    </Nav>
			  	</Navbar>
			</div>
		);
	}
};

 export default Header;
