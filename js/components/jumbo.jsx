import React from 'react';

export default class Jumbo extends React.Component {
    

    render () {
	    return (
	    	<div className="jumbotron-container container-fluid">
    	    	<div className="jumbotron-main-block flex-container">
	                <div className="jumbotron-thin-strip spacer add-color" />
	                <div className="jumbotron-head-block">
	                    <h1>Problems<br />Solved.</h1>
	                </div>
	            </div>
	            <div className="jumbotron-secondary-block flex-container">
	                <div className="jumbotron-thin-strip spacer" />
	                <div className="jumbtron-message-block">
	                    <p className="jumbotron-text">We use technology to create elegant <span className="jumbotron-text-highlight">solutions</span> for this accelerated and ever-evolving economy</p>
	                </div>
	            </div>
			</div>	        
	    );
	}
}
