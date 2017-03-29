import React from 'react';

export default class Join extends React.Component {
    
    handleEmailEntry(e) {
    	const entry = e.target.value;
    	this.props.submitEmail( entry ); 
    }


    render () {
	    return (
    		<div className="join-container">
	            <div className="join-text">
					<p>Get the details before the rest of the world by joining our email list.</p>
				</div>
				<div className="join-submit flex-container">
					<input type="email" onChange={this.handleEmailEntry.bind(this)} value={this.props.email} name="EMAIL" className="join-email-input" />
	            	<input type="submit" value="Join" name="submit" className="btn btn-join" />
	            </div>
            </div>
		);
	}
};

/*
<form action="//cachehive.us15.list-manage.com/subscribe/post?u=6ffde59ec6305ed2496e15c84&amp;id=c877def6a3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="subscribe-form" novalidate="novalidate" target="_blank">
	                <h2 className="join-title">Get the scoop!</h2>
	                <div className="form-group">
	                    <label for="mce-EMAIL" className="sr-only"></label>
	                    <input id="mce-EMAIL" type="email" value="" name="EMAIL" placeholder="Email" required="required" className="form-control form-control-lg"/>
	                </div>

	                <div id="mce-responses" className="clear">
	                    <div className="response" id="mce-error-response"></div>
	                    <div className="response" id="mce-success-response"></div>
	                </div>
	    
	                <input type="hidden" name="b_6ffde59ec6305ed2496e15c84_c877def6a3" tabindex="-1" value="" />
	                <div className="join-button-block text-xs-center">
	                    <input type="submit" value="Join" name="submit" className="button btn-primary join-button"/>
	                </div>
	            </form>
*/