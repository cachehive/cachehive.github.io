import React from 'react';
import Join from '../components/join';
import Footer from '../components/footer';
//import Community from '../components/community';

export default class Portfolio extends React.Component {

	render() {
    
        return (
        	<div className="portfolio-container container-fluid">
               	<div className="portfolio-main-block flex-container">
					<div className="portfolio-thin-strip spacer add-inverse-color" />
                    <div classname="portfolio-content-container">
                    	<div className="portfolio-head-block">
                        	<h1>portfolio</h1>
                        </div>
                        <div className="portfolio-message-block">
	                    	<p className="portfolio-text">
	           					We are currently hard at work on several projects and we look forward to sharing them with you soon.
							</p>
							<p className="portfolio-text">
								Get the details before the rest of the world by joining our email list.
							</p>
						</div>
						<Join submitEmail={this.props.submitEmail} email={this.props.email} />
                    </div>
				</div>
				<Footer />
			</div>
        );
    }
}



/*
			  			
                        <div className="portfolio-message-block">
	                    	<p className="portfolio-text">
	           					We are currently hard at work on several projects and we look forward to sharing them with you soon.
							</p>
							<p className="portfolio-text">
								Get the details before the rest of the world by joining our email list.
							</p>
						</div>
						
					</div>
				</div>
			</div>



					<div className="portfolio-flex">
		    			<div className="flex-block">
							<p className="component-block">
								<Join submitEmail={this.props.submitEmail} email={this.props.email} />
							</p>
						</div>
*/