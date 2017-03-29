import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
      }
  
      render () {
// <div class="image-block">
                    

        return (
            <div className="footer-container">
                <div className="footer-graphic-block flex-container">
                        <span class="fa-stack fa-3x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-envelope-o fa-inverse fa-stack-1x"></i>
                            <i class="fa fa-circle-thin fa-inverse fa-stack-2x"></i>
                            <p>Email Us</p>
                          </span>
                        <span class="fa-stack fa-3x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-twitter fa-inverse fa-stack-1x"></i>
                            <i class="fa fa-circle-thin fa-inverse fa-stack-2x"></i>
                            <p>Twitter</p>
                        </span>
                        <span class="fa-stack fa-3x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-instagram fa-inverse fa-stack-1x"></i>
                            <i class="fa fa-circle-thin fa-inverse fa-stack-2x"></i>
                            <p>Instagram</p>
                        </span>
                        <span class="fa-stack fa-3x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-youtube-play fa-inverse fa-stack-1x"></i>
                            <i class="fa fa-circle-thin fa-inverse fa-stack-2x"></i>
                            <p>YouTube</p>
                        </span>
                
                </div>
                <div className="copyright-content">
                  <p>© 2017 cachehive.com. All Rights Reserved.</p>
                </div>
            </div>
        );
      }
}

export default Footer;