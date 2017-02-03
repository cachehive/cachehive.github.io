import React from 'react';

class Contact extends React.Component {
  render () {
    return (
      <div className="contact">
        <div className="contact-box">
            <h2>CONTACT</h2><br />
            <h3>Give us a shout!</h3>
            <p>
                <a href="mailto:contact@cachehive.com">contact@cachehive.com</a>
                <br /><a href="tel:8584127295">858-412-7295</a>
                <br />P.O Box: 503553, 
                <br />San Diego, California 92150
            </p>
        </div>
      </div>
    );
  }
};

export default Contact;
