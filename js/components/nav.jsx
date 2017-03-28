import React from "react";
import { IndexLink, Link } from "react-router";
import Actions from '../actions';

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    onClick(route) {
        Actions.navigate(route);
        console.log( "onClick from Nav: " + route );
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.' + e );
    }

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";

        //let toggle_handler = this.toggleCollapse.bind(this);
        //let handler = event => { return this.onClick(page.name, event); };
        // className="navbar navbar-toggleable-md navbar-light bg-faded"
        // className="navbar navbar-default bg-faded hidden-xs" 

        return (
            <nav className="navbar navbar-default navbar-fixed-top bg-faded" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapes" onClick={this.toggleCollapse.bind(this)} >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <div className="navbar-brand pull-left">
                            <a href="#">
                                <img src="../assets/images/banner-logo-navy.svg" alt="cachehive.com" />
                            </a>
                        </div>
                    </div>

        

                    <div className={"navbar-collapse " + navClass} id="collapsible-navbar">
                        <div className="nav navbar-nav">
               
                            <a className="nav-item nav-link" onClick={this.toggleCollapse.bind(this), this.handleClick.bind(this) } >
                                <i className="fa fa-home fa-2x"></i>
                                <p>Home</p>
                            </a>
                        
                            <a className="nav-item nav-link" onClick={this.toggleCollapse.bind(this)} >
                                <i className="fa fa-folder-open fa-2x"></i>
                                <p>Portfolio</p>
                            </a>
                        
                            <a className="nav-item nav-link" onClick={this.toggleCollapse.bind(this)} >
                                <i className="fa fa-file-text fa-2x"></i>
                                <p>About</p>
                            </a>
                                
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}