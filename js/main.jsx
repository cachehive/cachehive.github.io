import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import Footer from './footer';
import Header from './header';
import Modal from 'react-modal';
import ReactGA from 'react-ga';
import Contact from './contact';
import Portfolio from './portfolio';
import About from './about';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
render() {
    return (
        <div>
            <Header title = 'the stuff' />
            <Jumbotron className="jumbotron-container">
                <h1 className="slogan">Thought centric innovation</h1>
                <p className="service-mark">The tools that got us here are no longer effective.  We are creating elegant solutions for an accelerated unfolding future. ( for where the new economy is heading )</p>
                

                <div className="down-arrow" onClick={this.props.downArrowClick}>
                    <a><i className="fa fa-arrow-circle-down fa-4x"></i></a>
                </div>
            </Jumbotron>
            <About />
            <Portfolio />
            <Footer />
        </div>
      );
  }
}

//export default App;
document.addEventListener( 'DOMContentLoaded', () => {
    ReactDOM.render( <App />, document.getElementById('root') );
    Modal.setAppElement( document.getElementById('root') );
});
