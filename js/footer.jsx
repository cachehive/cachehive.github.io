 import React from 'react';
import Alert from 'react-bootstrap';
import Contact from './contact';
 


class Footer extends React.Component {
    constructor(props) {
        super(props);
      }
  
      render () {
        return (
          <div className="footer">
              <div className="join-container">
              <form action="//cachehive.us15.list-manage.com/subscribe/post?u=6ffde59ec6305ed2496e15c84&amp;id=c877def6a3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="subscribe-form" novalidate="novalidate" target="_blank">
                  <h2 className="footer-title">Get the scoop!</h2>
                  <div className="form-group">
                      <label for="mce-EMAIL" className="sr-only"></label>
                      <input id="mce-EMAIL" type="email" value="" name="EMAIL" placeholder="Email" required="required" className="form-control form-control-lg"/>
                  </div>

                  <div id="mce-responses" className="clear">
                      <div className="response" id="mce-error-response"></div>
                      <div className="response" id="mce-success-response"></div>
                  </div>
    
                  <input type="hidden" name="b_6ffde59ec6305ed2496e15c84_c877def6a3" tabindex="-1" value="" />
                  <div className="text-xs-center">
                    <input type="submit" value="Join" name="submit" className="button btn-primary"/>
                  </div>
              </form>
              </div>

              <Contact />
            
              <ul className="community list-unstyled">
                  <li><a href="mailto:info@cachehive.com" target="_blank">
                      <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                      </span>Email us</a></li>
                  <li><a href="http://facebook.com/cachehive" target="_blank">
                      <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                      </span>Facebook</a></li>
                  <li><a href="http://github.com/cachehive/" target="_blank">
                      <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                      </span>GitHub</a>
                  </li>
                  <li><a href="https://plus.google.com/cachehive/" target="_blank">
                      <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-google-plus fa-stack-1x fa-inverse"></i>
                      </span>Google +</a>
                  </li>
                  <li><a href="https://instagram.com/cachehive/" target="_blank">
                      <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                      </span>Instagram</a>
                  </li>
                  <li><a href="http://linkedin.com/company/cachehive" target="_blank">
                      <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                      </span>LinkedIn</a>
                  </li>
                  <li><a href="http://blog.cachehive.com/rss/" target="_blank">
                      <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-rss fa-stack-1x fa-inverse"></i>
                      </span>RSS</a>
                  </li>
                  <li><a href="http://twitter.com/cachehive" target="_blank">
                      <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>Twitter</a>
                  </li>
                  <li><a href="https://www.youtube.com/channel/cacheive" target="_blank">
                      <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
                      </span>YouTube</a>
                  </li>
              </ul>
          </div>
        );
    }
};

export default Footer;
