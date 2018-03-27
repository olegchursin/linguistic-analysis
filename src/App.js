import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
// General
import AuthContainer from './components/auth/AuthContainer'
import SignupForm from './components/auth/SignupForm'
import MainContainer from './components/main/MainContainer' // Landing Page
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// Specific
import DictionaryContainer from './components/dictionary/DictionaryContainer'
import SemanticsContainer from './components/semantics/SemanticsContainer'
import PhoneticsContainer from './components/phonetics/PhoneticsContainer'
import TextContainer from './components/text/TextContainer'
import HashtagContainer from './components/hashtag/HashtagContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="site">
          <NavBar />
          <div className="site-content">
            <Route path="/" exact component={MainContainer} />
            <Route path="/login" exact component={AuthContainer} />
            <Route path="/signup" exact component={SignupForm} />
            <Route path="/lexical" exact component={DictionaryContainer} />
            <Route path="/semantics" exact component={SemanticsContainer} />
            <Route path="/phonetics" exact component={PhoneticsContainer} />
            <Route path="/text" exact component={TextContainer} />
            <Route path="/hashtag" exact component={HashtagContainer} />
          </div>
          <Footer className="sticky-footer"/>
        </div>
      </Router>
    );
  }
}

export default App;
