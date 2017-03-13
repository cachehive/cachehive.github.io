import React from 'react';
import Community from '../components/community';
 
export default class About extends React.Component {
	
	render() {
		return ( 
			<div className="about-container container-fluid">
			   	<div className="about-main-block flex-container">
					<div className="about-thin-strip spacer add-inverse-color" />
                    <div classname="about-content-container">
                    	<div className="about-head-block">
                        	<h1>about</h1>
                        </div>
            			<div className="about-message-block">
	                    	<p className="about-text">
	           					Problem solving is at the heart of CacheHive. We are driven by a passion for identifying pain points and developing clever solutions that help millennials navigate their lives.
							</p>
							<p className="about-text">
								Whenever we find ourselves asking, “why isn’t there a better way to do this?” we set out to create one. This process has led us to develop software and tangible products that fix everyday people’s everyday problems.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}