import React from 'react';

class NavBrand extends React.Component {
    render() {
        return (
          <div className="navbar-brand pull-right ">
            <a href="#">
              <img src="../assets/images/ch-logo.png" alt="cachehive.com" />
            </a>
          </div>
      );
    }
}

export default NavBrand;