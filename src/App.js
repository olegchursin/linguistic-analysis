import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
// General
import AuthContainer from './components/auth/AuthContainer'
import SignupForm from './components/auth/SignupForm'
import Sitemap from './components/legal/Sitemap'
import Contact from './components/legal/Contact'
import Disclaimer from './components/legal/Disclaimer'
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

  componentDidCatch(error, info) {
      // Display fallback UI
      console.log("ERROR", info)
    }

  render() {
    return (
      <Router>
        <div className="site">
          <NavBar />
          <div className="site-content">
            <Route
              exact path="/"
              component={MainContainer} />
            <Route
              exact path="/login"
              component={AuthContainer} />
            <Route
              exact path="/signup"
              component={SignupForm} />
            <Route
              exact path="/sitemap"
              component={Sitemap} />
            <Route
              exact path="/disclaimer"
              component={Disclaimer} />
            <Route
              exact path="/contact"
              component={Contact} />
            <Route
              exact path="/lexical"
              component={DictionaryContainer} />
            <Route
              exact path="/semantics"
              component={SemanticsContainer} />
            <Route
              exact path="/phonetics"
              component={PhoneticsContainer} />
            <Route
              exact path="/text"
              component={TextContainer} />
            <Route
              exact path="/hashtag"
              component={HashtagContainer} />
          </div>
          <Footer className="sticky-footer"/>
        </div>
      </Router>
    );
  }
}

export default App;
