import React from 'react';

class About extends React.Component {
	constructor() {
		super();
		this.state = {
  			value: null,
		};
		console.log( 'constructor function' );
		
	}
  
	render() {
		return ( 
			 <div className="about-container">
			 About
Header (if needed): Problems Solved. (or Millennial Problems Solved?)

Problem solving is at the heart of CacheHive. We are driven by a passion for identifying pain points and developing clever solutions that help millennials navigate their lives. 

Whenever we find ourselves asking, “why isn’t there a better way to do this?” we set out to create one. This process has led us to develop software and tangible products that fix everyday people’s everyday problems.

To learn more about what CacheHive has to offer check out our portfolio.
			 </div>
		);
	}
};

export default About;
