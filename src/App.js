import React, { Component } from 'react';
import './App.css';
import Picture from './components/Picture';


class App extends Component {
  render() {
    return (
      <div data-test= "app-container">
        <Picture />
      </div>
    );
  }
}

export default App;
