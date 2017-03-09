 import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
      }
  
      render () {
        return (
          <div className="footer-content">          
              <p className="copyright-content">© 2017 cachehive.com. All Rights Reserved.</p>
          </div>
        );
      }
}

export default Footer;