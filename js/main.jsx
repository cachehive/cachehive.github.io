import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import Footer from './footer';
import Header from './header';
import Modal from 'react-modal';
import ReactGA from 'react-ga';
import BurgerNav from './burgernav'

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
       <div>
           <BurgerNav />
         <div>
           <Header title="The cacheHive website"/>
         </div>
         <div>
             <p>Practice Area</p>
             <Ok2Delete />
         </div>
         <div>Hello cacheHive</div>
         <div>
           <Footer />
         </div>
       </div>
    );
  }
}

//export default App;
document.addEventListener( 'DOMContentLoaded', () => {
    ReactDOM.render( <App />, document.getElementById('root') );
    Modal.setAppElement( document.getElementById('root') );
});
