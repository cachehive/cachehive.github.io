import React from 'react';

export default class Community extends React.Component {
    render () {
        return (
        	<div className="community-content pull-right">          
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
}