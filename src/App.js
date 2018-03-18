import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import DictionaryContainer from './components/dictionary/DictionaryContainer'
import MainContainer from './components/main/MainContainer'
import SemanticsContainer from './components/semantics/SemanticsContainer'
import PhoneticsContainer from './components/phonetics/PhoneticsContainer'
import TextContainer from './components/text/TextContainer'
import HashtagContainer from './components/hashtag/HashtagContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="site">
          <NavBar />
          <div className="site-content">
            <Route path="/" exact component={MainContainer} />
            <Route path="/dictionary" exact component={DictionaryContainer} />
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
