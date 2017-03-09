import React from 'react';
import ReactDOM from 'react-dom';
//import Modal from 'react-modal';

//import Footer from '../components/footer';
//import NavBar from '../components/nav-bar/nav-bar';
import NavBar from '../components/nav';
import Palette from '../components/palette';

//import Header from '../components/header';
import About from './about';
//import Contact from './contact';
import Portfolio from './portfolio';

export default class Layout extends React.Component {

    constructor(props) {
      super(props);
      this.state = { scrollState: 0 };
    }

    componentDidMount () {
        document.addEventListener('scroll', () => {
            let newScrollState = Math.round(window.scrollY / window.innerHeight);
            this.setState({scrollState: newScrollState});
        });
    }

    setScrollInterval (e) {
        let siblings = e.currentTarget.parentElement.children;
        let current = Array.from(siblings).indexOf(e.currentTarget);
        this.scrollTo(current);
    }

    scrollTo (current) {
        let scrollHeight = current * window.innerHeight;
        if (current === 3) { 
            scrollHeight -= 20; 
        }

        clearInterval(this.scrollInterval);

        this.scrollInterval = setInterval(() => {
            if ((window.scrollY > scrollHeight + 5) ||
                (window.scrollY < scrollHeight - 5)) {
                const factor = Math.abs(window.scrollY - scrollHeight);
                let diff = window.scrollY < scrollHeight ? 2 : -2;
                if (factor > 50) diff *= 5;

                let newY = window.scrollY + diff;
                window.scrollTo(0, newY);
            } else {
                clearInterval(this.scrollInterval);
            }
        }, 1);
    }


    handleSetActive(to) {
        console.log(to);
    }

  
    render() {

        return (
            <div> 
                <NavBar index={this.state.pages} route={this.state.route}/>
                <section className="jumbotron">
                    <h1 className="slogan">thought centric innovation</h1>
                    <p className="service0">The tools that got us here are no longer effective.</p>
                    <p className="service1">We use technology to create elegant solutions for this accelerated and ever evolving economy.</p>
                    <Palette />
                </section> 
                <section className="portfolio" id="portfolio">
                    <Portfolio />
                </section>   
                <section className="about" id="about">
                        <About />
                </section>  
            </div>
        );
    }
}