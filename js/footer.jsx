import React from 'react';
import Alert from 'react-bootstrap';

class Footer extends React.Component {
    constructor(props) {
        super(props);
      }
  
      render () {
        return (
          <nav className="footer-nav">
            <a onClick={this.props.mainLogoClick}>
              <div className="logo">LINDSAY SAYRE</div>
            </a>
            <div className="nav-buttons">
              <a href="https://www.linkedin.com/in/lindsaysayre/"
                target="_blank">
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/lindsaysayre/"
                target="_blank">
                <i className="fa fa-github fa-2x"></i>
              </a>
              <a href="http://lindsaymsayre.tumblr.com/"
                target="_blank">
                <i className="fa fa-tumblr fa-2x"></i>
              </a>
            </div>
          </nav>
        );
    }
};

export default Footer;
