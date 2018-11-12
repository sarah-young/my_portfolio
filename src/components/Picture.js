import React, { Component } from 'react';
import '../App.css';

class Picture extends Component {

  render() {
    return (
      <div id="photo" data-test= "picture-container">
        <img src="./files/sarah-headshot.jpg" alt="Sarah Young, Software Engineer" />
      </div>
    );
  }
}

export default Picture;
