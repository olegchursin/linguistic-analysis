import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import DictionaryContainer from './components/dictionary/DictionaryContainer'
import Main from './components/main/Main'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Main />
          <DictionaryContainer />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
