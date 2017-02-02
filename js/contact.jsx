import React from 'react';

class Contact extends React.Component {
  render () {
    return (
      <div className="contact-container">
        <div className="contact-box">
          <div className="profile-description">
            <h2>CONTACT</h2><br />
            <h3>Give us a shout!</h3>
            <p>
                <a href="mailto:contact@cachehive.com">contact@cachehive.com</a>
                <a href="tel:8584127295">858-412-7295</a>
                <br />P.O Box: 503553, San Diego, California 92150
            </p>
          </div>
          <div className="up-arrow" onClick={this.props.upArrowClick}>
            <a><i className="fa fa-arrow-circle-up fa-4x"></i></a>
          </div>
        </div>
      </div>
    );
  }
};

export default Contact;
