import React from 'react';
import Actions from '../actions';
import AppStore from '../stores/app-store';

export default class Join extends React.Component {
    
    /*componentWillMount() {
        this.appStoreId = AppStore.registerView(() => { this.updateState(); });
        this.updateState();
    }
 
    componentWillUnmount() {
    	AppStore.deregisterView(this.appStoreId);
    }
         
	updateState() {
        this.setState({
            email: AppStore.get('email'),
        });
    }
 */
    onSubmit() {
        alert(`Submitted email address: ${this.state.email}`);
    }
 
    onChange() {
        this.setState({
            email: React.findDOMNode(this.refs.em).value,
        });
    }
    render () {
	    let submitHandler = event => { return this.onSubmit(event); };
        let changeHandler = event => { return this.onChange(event); };
  ``      
	    return (
    		<div className="join-container">
	            <div className="join-text">
					<p>Get the details before the rest of the world by joining our email list.</p>
					<div className="join-form flex-container">
						<input type="email" className="join-email" placeholder={this.props.email} name="EMAIL" />
		            	<input type="submit"className="btn btn-join" value="Join" name="submit" />
		          </div>
		        </div>
	        </div>
		);
	}

					
};

//   ${this.props.email}


//<input className="form-control" onChange={changeHandler} placeholder="Last Name" type="text" value={this.state.lastname} ref="ln"/>
//<input type="email" onChange={this.handleEmailEntry.bind(this)} placeholder={this.props.email} name="EMAIL" className="join-email-input" />
//<input type="submit" onClick={this.handleEmailSubmit.bind(this)} value="Join" name="submit" className="btn btn-join" />



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