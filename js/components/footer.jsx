import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
      }
  
      render () {
        return (
            <div className="footer-container flex-container">
                <div className="footer-content">
                    <div className="copyright-content">© 2017 cachehive.com. All Rights Reserved.</div>
                </div>
            </div>
        );
      }
}

export default Footer;