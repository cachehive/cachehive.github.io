import React from 'react';
import Community from '../components/community';
import Footer from '../components/footer';

export default class About extends React.Component {
	constructor() {
		super();
		this.state = {
  			value: null,
		};
		console.log( 'constructor function' );
	}
  
	render() {
		return ( 
			 <div id="about" className="about-container container-fluid">
			  	<h2>about</h2>
		 		<div className="about-content">
			  		<div className="about-flex">
						<div className="flex-block">
							<h3>Problems Solved!</h3>
							<p className="text-block">
							Problem solving is at the heart of CacheHive. We are driven by a passion for identifying pain points and developing clever solutions that help millennials navigate their lives.  Whenever we find ourselves asking, “why isn’t there a better way to do this?” we set out to create one. This process has led us to develop software and tangible products that fix everyday people’s everyday problems.
							</p>
							<p className="blocktext">
							To learn more about what CacheHive has to offer check out our portfolio.
							</p>
						</div>
						<div className="flex-block">
							<Community />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}