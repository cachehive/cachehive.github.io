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

//import { Link, Element, Events, animateScroll, scrollspy } from 'react-scroll';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

class App extends React.Component {
  
    constructor(props) {
      super(props);
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    scrollTo() {
        scroll.scrollTo(100);
    }

    scrollMore() {
        animateScroll.scrollMore(100);
    }

    handleSetActive(to) {
        console.log(to);
    }

  
    render() {
        return (
            <div> 
                <Element name="jumbotron-container" className="element">
                        <Header title = 'the stuff' />
                        <Jumbotron >
                            <h1 className="slogan">Thought centric innovation</h1>
                            <p className="service-mark">The tools that got us here are no longer effective.  We are creating elegant solutions for an accelerated unfolding future. ( for where the new economy is heading )</p>
                        </Jumbotron>
                        <Link activeClass="active" to="about-container" spy={true} smooth={true} offset={50} 
                                    duration={500} onClick={this.handleSetActive}>
                            <a><i className="fa fa-arrow-circle-down fa-4x"></i></a>
                        </Link>

                </Element>

                <Element name="about-container">
                    <Link activeClass="active" to="jumbotron-container" spy={true} smooth={true} offset={50} 
                            duration={500} onClick={this.handleSetActive}>
                        <a><i className="fa fa-arrow-circle-up fa-4x"></i></a>
                    </Link>
                    <About />
                    <Link activeClass="active" to="portfolio-container" spy={true} smooth={true} offset={50} 
                            duration={500} onClick={this.handleSetActive}>
                        <a><i className="fa fa-arrow-circle-down fa-4x"></i></a>
                    </Link>
                </Element>
                
                <Element name="portfolio-container">
                    <Link activeClass="active" to="about-container" spy={true} smooth={true} offset={50} 
                            duration={500} onClick={this.handleSetActive}>
                        <a><i className="fa fa-arrow-circle-up fa-4x"></i></a>
                    </Link>
                    <Portfolio />
                    <Link activeClass="active" to="contact-container" spy={true} smooth={true} offset={50} 
                            duration={500} onClick={this.handleSetActive}>
                        <a><i className="fa fa-arrow-circle-down fa-4x"></i></a>
                    </Link>
                </Element>

                <Element name="contact-container">
                    <Link activeClass="active" to="portfolio-container" spy={true} smooth={true} offset={50} 
                            duration={500} onClick={this.handleSetActive}>
                        <a><i className="fa fa-arrow-circle-up fa-4x"></i></a>
                    </Link>
                    <Footer />
                </Element>
            </div>
        );
    }
}

//export default App;
document.addEventListener( 'DOMContentLoaded', () => {
    ReactDOM.render( <App />, document.getElementById('root') );
    Modal.setAppElement( document.getElementById('root') );
});
