import React from 'react';

export default class Jumbo extends React.Component {
    
    // <div className="down-arrow" onClick={() => this.scrollTo(1)}>
                

    render () {
	    return (
	    	<div className="jumbotron-container container-fluid">
    	    	<h1>Problems Solved.</h1>
	            <p className="jumbotron-text">Elegant technology solutions for this accelerated economy</p>
	            <div className="down-arrow">
                	<span class="fa-stack fa-lg">
  						<i class="fa fa-circle-thin fa-stack-2x"></i>
  						<i class="fa fa-chevron-down fa-stack-1x"></i>
					</span>
	
                </div>
	        </div>	        
	    );
	}
}
