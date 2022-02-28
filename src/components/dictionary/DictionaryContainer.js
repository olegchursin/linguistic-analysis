import React from 'react';

import { connect } from 'react-redux';

import { Icon, Popup } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';

import {
  defineYandex,
  defineTwinword,
  defineWordsApi,
  defineUrban,
  thesaurusSyn,
  thesaurusAssoc,
  thesaurusAnt,
  rhymesWith,
  translateEs,
  translateFr,
  translateIt,
  translateRu,
  translateDe
} from '../../actions/dictionaryActions';
import { addProject } from '../../actions/projectActions';

import DictionaryHeader from './DictionaryHeader';
import DictionaryDefinition from './DictionaryDefinition';
import DictionaryTranslation from './DictionaryTranslation';
import DictionaryThesaurus from './DictionaryThesaurus';
import DictionarySearchBar from './DictionarySearchBar';
import DictionaryRhymesWith from './DictionaryRhymesWith';

class DictionaryContainer extends React.Component {
  state = {
    searchTerm: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    // making a call to dictionaryActions.js
    // Defintion Actions
    this.props.defineYandex(searchTerm);
    // this.props.defineTwinword(searchTerm);
    // this.props.defineWordsApi(searchTerm);
    // this.props.defineUrban(searchTerm);
    // Thesaurus Actions
    this.props.thesaurusSyn(searchTerm);
    this.props.thesaurusAssoc(searchTerm);
    // this.props.thesaurusAnt(searchTerm);
    // Rhymes with
    // this.props.rhymesWith(searchTerm);
    // Trnaslation actions
    this.props.translateEs(searchTerm);
    this.props.translateFr(searchTerm);
    this.props.translateIt(searchTerm);
    this.props.translateRu(searchTerm);
    this.props.translateDe(searchTerm);
  };

  render() {
    return (
      <div>
        <DictionaryHeader />
        <div className="ui main text container main-content">
          <Divider section hidden />
          <h2>Enter a lexeme</h2>
          <DictionarySearchBar
            searchTerm={this.state.searchTerm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Divider section hidden />
          <h3>
            Definition
            <Popup
              className="popup-icon"
              trigger={<Icon name="info circle" />}
              content="Find and compare lexical meanings."
              size="mini"
            />
          </h3>
          <Divider />
          <DictionaryDefinition />
          <Divider section hidden />

          <h3>
            Thesaurus
            <Popup
              className="popup-icon"
              trigger={<Icon name="info circle" />}
              content="Explore synonyms and antonyms."
              size="mini"
            />
          </h3>

          <Divider />
          <DictionaryThesaurus />
          <Divider section hidden />
          <h3>
            Translation
            <Popup
              className="popup-icon"
              trigger={<Icon name="info circle" />}
              content="Translate a lexeme into a number of languages."
              size="mini"
            />
          </h3>

          <Divider />
          <DictionaryTranslation />
          <Divider section hidden />
          <h3>
            Phonetics / Rhymes with
            <Popup
              className="popup-icon"
              trigger={<Icon name="info circle" />}
              content="Get a list of words that rhyme with the given word."
              size="mini"
            />
          </h3>
          <Divider />
          <DictionaryRhymesWith />
          <Divider section hidden />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects // from ./reducers/projectReducer.js
  };
};

export default connect(mapStateToProps, {
  addProject,
  defineYandex,
  defineTwinword,
  defineWordsApi,
  defineUrban,
  thesaurusSyn,
  thesaurusAssoc,
  thesaurusAnt,
  rhymesWith,
  translateEs,
  translateFr,
  translateIt,
  translateRu,
  translateDe
})(DictionaryContainer);
