import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import ReactGA from 'react-ga';
import Modal from 'react-modal';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>Hello cacheHive</div>
    );
  }
}

//export default App;
document.addEventListener( 'DOMContentLoaded', () => {
  ReactDOM.render( <App />, document.getElementById('root') );
  Modal.setAppElement( document.getElementById('root') );
});
