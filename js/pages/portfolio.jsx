import React from 'react';
import Join from '../components/join';

export default class Portfolio extends React.Component {
    render () {
	    return (
	    	<div id="portfolio" className="portfolio-container container-fluid">
				<h2>portfolio</h2>
			 	<div className="portfolio-content">
			  		<div className="portfolio-flex">
		    			<div className="flex-block">
							<p className="component-block">
								<Join />
							</p>
						</div>
						<div className="flex-block">
							<p className="text-block">
								We are currently hard at work on several projects and we look forward to sharing them with you soon.
							</p>
							<p className="text-block">
								Get the details before the rest of the world by joining our email list!
							</p>
						</div>
					</div>
				</div>
			</div>
	    );
	}
}