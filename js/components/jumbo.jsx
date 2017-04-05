import React from 'react';

export default class Jumbo extends React.Component {
    
    //<i className="fa fa-circle-thin fa-stack-2x"></i>
	//<span className="fa-stack fa-4x">
	//	<i className="fa fa-chevron-down fa-stack-1x"></i>
	//</span>							
    
    render () {
	    return (
	    	<div className="jumbotron-container">
    	    	<div className="jumbotron-content" >
    	    		<h1>Problems Solved.</h1>
	            	<p className="jumbotron-text">Elegant technology solutions for this accelerated economy</p>
	            </div>
            	<div className="down-arrow-wrapper">
	            	<a className="fa fa-chevron-down" onClick={() => this.props.scrollTo(1)}></a>
	            </div>
            </div>	        
	    );
	}
}
