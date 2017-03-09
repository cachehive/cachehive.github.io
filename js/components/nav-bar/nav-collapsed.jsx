import React from 'react';

class NavCollapsed extends React.Component {
    render() {
//    	add to button element onClick={this.toggleCollapse.bind(this) }
        return (
			<button type="button" className="navbar-toggle collapes " >
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
      	);
    }
}

export default NavCollapsed;






