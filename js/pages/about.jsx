import React from 'react';
import Community from '../components/community';
 
export default class About extends React.Component {
	
	render() {
		return ( 
			<div className="about-container container-fluid">
			   	<div className="about-graphic-block flex-container" >
			   		<div className="graphic-0" />
			   		<div className="graphic-1" />
			   		<div className="graphic-2" />
			   	</div>
				<div className="about-head-block">
                	<h1>about us</h1>
                </div>
    			<div className="about-message-block">
                	<p className="about-text">
       					Problem solving is at the heart of CacheHive. We are driven by a passion for identifying pain points and developing clever solutions that help millennials navigate their lives.  Whenever we find ourselves asking, “why isn’t there a better way to do this?” we set out to create one. This process has led us to develop software and tangible products that fix everyday people’s everyday problems.
					</p>
				</div>
			</div>
		);
	}
}