import React from 'react';
import Alert from 'react-bootstrap';

class Footer extends React.Component {
    constructor(props) {
        super(props);
      }
  
      render () {
        return (
          <div>
          <nav className="footer-nav">
            <a onClick={this.props.mainLogoClick}>
              <div className="logo">cachehive.com</div>
            </a>
          </nav>

          <form action="//cachehive.us11.list-manage.com/subscribe/post?u=xxx&amp;amp;id=xxx" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate="novalidate" class="subscribe-form">
              <h3 class="footer-title">sign up for the newsletter</h3>
              <div class="form-group">
                <label for="mce-EMAIL" class="sr-only">Get the scoop</label>
                <input id="mce-EMAIL" type="email" value="" name="EMAIL" placeholder="Email" required="required" class="form-control form-control-lg"/>
              </div>
              <input type="hidden" name="XXX" tabindex="-1" value=""/>
              <div class="text-xs-center">
                <input type="submit" value="Join" name="Join" class="btn btn-primary"/>
              </div>
          </form>

          <ul class="community list-unstyled">
              <li><a href="mailto:info@cachehive.com" target="_blank">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                  </span>Email us</a></li>
              <li><a href="http://facebook.com/cachehive" target="_blank">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>Facebook</a></li>
              <li><a href="http://github.com/cachehive/" target="_blank">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>GitHub</a>
              </li>
              <li><a href="https://plus.google.com/cachehive/" target="_blank">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-google-plus fa-stack-1x fa-inverse"></i>
                  </span>Google +</a>
              </li>
              <li><a href="https://instagram.com/cachehive/" target="_blank">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                  </span>Instagram</a>
              </li>
              <li><a href="http://linkedin.com/company/cachehive" target="_blank">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>LinkedIn</a>
              </li>
              <li><a href="http://blog.cachehive.com/rss/" target="_blank">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-rss fa-stack-1x fa-inverse"></i>
                  </span>RSS</a>
              </li>
              <li><a href="http://twitter.com/cachehive" target="_blank">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>Twitter</a>
              </li>
              <li><a href="https://www.youtube.com/channel/cacheive" target="_blank">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
                  </span>YouTube</a>
              </li>
          </ul>
          </div>
        );
    }
};

export default Footer;
