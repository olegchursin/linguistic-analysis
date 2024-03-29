import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sitemap from './components/legal/Sitemap';
import Contact from './components/legal/Contact';
import Disclaimer from './components/legal/Disclaimer';
import MainContainer from './components/main/MainContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import DictionaryContainer from './components/dictionary/DictionaryContainer';
import SemanticsContainer from './components/semantics/SemanticsContainer';
import TextContainer from './components/text/TextContainer';
import HashtagContainer from './components/hashtag/HashtagContainer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="site">
        <NavBar />
        <div className="site-content">
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/sitemap" component={Sitemap} />
          <Route exact path="/disclaimer" component={Disclaimer} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/lexical" component={DictionaryContainer} />
          <Route exact path="/semantics" component={SemanticsContainer} />
          <Route exact path="/text" component={TextContainer} />
          <Route exact path="/hashtag" component={HashtagContainer} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
