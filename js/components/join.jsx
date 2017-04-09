import React from 'react';
import ReactDOM from 'react-dom'
import Actions from '../actions';
import AppStore from '../stores/app-store';
import axios from 'axios';

export default class Join extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {email: 'enter email'};

 	}
    
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

	sendToMailChimp() {
		let mailchimpInstance   = 'us15',
    		listUniqueId        = 'c877def6a3',
    		mailchimpApiKey     = '639301b95bd4a7ce5ab48a341298e801-us15';

    	axios.post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/', {
        	auth: 'api_key: ' + mailchimpApiKey,
      		header: 'content-type: application/json',
      		mode: 'no-cors',	
      		data: {
		    	"email_address": this.state.email,
		        "status": "subscribed"
		    }
		})
		.then(function (response) {
		      console.log(response);
		})
		.catch(function (error) {
		      console.log(error);
		});
	}

	sendToMailChimp2() {
		let authenticationString = btoa('api_key: 639301b95bd4a7ce5ab48a341298e801-us15');
    	authenticationString = "Basic " + authenticationString;

    	let listUniqueId        = 'c877def6a3';

    	fetch('https://us15.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members', {
	      mode: 'no-cors',
	      method: 'POST',
	      headers: {
	        'authorization': authenticationString,
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify({
	        email_address: "cachehive@gmail.com", 
	        status: "subscribed",
	      })
	    }).then(function(e){
	        console.log("fetch finished: " + e )
	    }).catch(function(e){
	        console.log("fetch error: " + e );
	    })
	}

    onSubmit() {
        this.sendToMailChimp();
        alert(`Submitted email address: ${this.state.email}`);

        this.setState({
            email: '',
        });

        ReactDOM.findDOMNode(this.refs.em).value = '';
        
        event.preventDefault();
    }
 
    onChange() {
        this.setState({
            email: ReactDOM.findDOMNode(this.refs.em).value,
        });
    }

    render () {
	    
	   	let submitHandler = event => { return this.onSubmit(event); };
        let changeHandler = event => { return this.onChange(event); };
    
	    return (
    		<div className="join-container">
	            <div className="join-text">
					<p>Get the details before the rest of the world by joining our email list.</p>
					<form className="join-form flex-container" onSubmit={submitHandler}>
						<input type="email" className="join-email" placeholder={this.props.email} 
							  onChange={changeHandler} name="EMAIL" ref="em" />
		            	<input type="submit" className="btn btn-join" value="Join" name="submit" />
		          	</form>
   {this.state.email}
		        </div>
	        </div>
		);
	}
};

					//<form className="join-form flex-container"  >
					//onChange={this.changeHandler} 


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