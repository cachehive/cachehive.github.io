import React from 'react';

export default class Portfolio extends React.Component {


	render() {
    
        return (
        	<div className="portfolio-container container-fluid">

           		<div className="portfolio-image-container">
                	<div className="portfolio-headline">
                		<h1>our portfolio</h1>
                	</div>
                	<img src="../assets/images/desk-vector.svg" alt="portfolio" className="portfolio-image img-responsive" />
           		</div>
				
                <div className="portfolio-message-block">
                	<p className="portfolio-text">
       					We are currently hard at work on several projects and we look forward to sharing them with you soon.
					</p>
				</div>
			</div>
        );
    }
}



/*

				<Join submitEmail={this.props.submitEmail} email={this.props.email} />
                <Footer />



			  			
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