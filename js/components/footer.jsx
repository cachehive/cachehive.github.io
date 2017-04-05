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
                    <a href="mailto:info@cachehive.com" target="_blank">
                        <div className="contact-type" >
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-envelope-o fa-inverse fa-stack-1x"></i>
                            </span>
                            <p>Email Us</p>
                        </div>
                    </a>
                    <a href="http://twitter.com/cachehive" target="_blank">
                        <div className="contact-type" >
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-twitter fa-inverse fa-stack-1x"></i>
                            </span>
                            <p>Twitter</p>
                        </div>
                    </a>
                    <a href="https://instagram.com/cachehive/" target="_blank">
                        <div className="contact-type" >
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-instagram fa-inverse fa-stack-1x"></i>
                            </span>
                            <p>Instagram</p>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UC0iRS_QUJpOKURo4Hs67YHA" target="_blank">
                        <div className="contact-type" >
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-youtube-play fa-inverse fa-stack-1x"></i>
                            </span>
                            <p>YouTube</p>
                        </div>
                    </a>
                </div>
                <div className="copyright-content">
                  <p>© 2017 cachehive.com. All Rights Reserved.</p>
                </div>
            </div>
        );
      }
}

export default Footer;