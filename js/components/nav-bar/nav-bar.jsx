import React from 'react';
import NavBrand from './nav-brand';
import NavCollapsed from './nav-collapsed';
import NavLinks from './nav-links';
import NavToolbar from './nav-toolbar';
import Actions from '../../actions';
 
class NavBar extends React.Component {

    onClick(route) {
        Actions.navigate(route);
    }

    render() {
//        const { collapsed } = this.state;
//        const navClass = collapsed ? "collapse" : "";
//        <div className={"navbar-collapse " + navClass} id="collapsible-navbar">
        let handler = event => { return this.onClick('pages', event); };
          
        return (
            <header>
                <div className="navbar-header">
                    <NavBrand />
                </div>
                <div>
                    <NavCollapsed />
                </div>
                <div className="navbar-collapse collapse" id="collapsible-navbar">
                    <ul className="nav navbar-nav pull-right">
       
                        <div className="pull-right">
                  
                            <li className="nav-item">
                                <a onClick={ this.handler }>
                                    <p>Home</p>
                                </a >
                            </li>
                  
                            <li className="nav-item">
                                <a onClick={ this.handler }>
                                    <p>About</p>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a onClick={ this.handler }>
                                    <p>Portfolio</p>
                                </a>
                            </li>

                        </div>
                    </ul>
                </div>
                
            </header>
        );
    }
}

/*
NavBar.propTypes = {
    pages: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                auth: React.PropTypes.bool,
                nav: React.PropTypes.bool,
                name: React.PropTypes.string.isRequired,
                title: React.PropTypes.string.isRequired
            })
        ).isRequired,
    route: React.PropTypes.string.isRequired
};
*/
export default NavBar;