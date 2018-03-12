import React, { Component } from 'react';
import './css/App.css';
import DictionaryContainer from './components/DictionaryContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <DictionaryContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
