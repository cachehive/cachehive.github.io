import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from '../components/nav-bar/nav-bar';
//import NavBar from '../components/nav';
import Palette from '../components/palette';
import Jumbo from '../components/jumbo';
import Portfolio from './portfolio';
import About from './about';


export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = { scrollState: 0 };
        this.state = { email: 'Enter Email' };
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

    submitEmail( email ) {
        this.setState({ email });
    }

  
    render() {
        // `<NavBar index={this.state.pages} route={this.state.route}/>
                
                
        return (
            <div> 
                <section className="jumbotron" id="home">
                    <Jumbo />
                </section> 
                <section className="about" id="about">
                    <About />
                </section> 
                <section className="portfolio" id="portfolio">
                    <Portfolio submitEmail={this.submitEmail.bind(this)} email={this.state.email} />
                </section>
            </div>
        );
    }
}