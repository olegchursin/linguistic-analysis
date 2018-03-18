import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

// Redux
import { connect } from 'react-redux'

//Semantic UI
import { Icon, Popup } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'

// actions
import { defineOxford, defineYandex, defineTwinword, defineWordsApi, defineUrban, thesaurusSyn, thesaurusAssoc, thesaurusTheme, translateEs, translateFr, translateIt, translateRu, translateDe } from '../../actions/dictionaryActions'
import { addProject } from '../../actions/projectActions'

// Components
import DictionaryHeader from './DictionaryHeader'
import DictionaryDefinition from './DictionaryDefinition';
import DictionaryTranslation from './DictionaryTranslation';
import DictionaryThesaurus from './DictionaryThesaurus';
import SearchBar from '../SearchBar';


class DictionaryContainer extends React.Component {
  state = {
    searchTerm: ''
  }

  // CORS anywhere patch
  // https://cors-anywhere.herokuapp.com/

  handleFetch = () => {
    console.log("fetching")
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // making a call to dictionaryActions.js
    // Defintion Actions
    this.props.defineOxford(this.state.searchTerm);
    this.props.defineYandex(this.state.searchTerm);
    this.props.defineTwinword(this.state.searchTerm);
    this.props.defineWordsApi(this.state.searchTerm);
    this.props.defineUrban(this.state.searchTerm);
    // Thesaurus Actions
    this.props.thesaurusSyn(this.state.searchTerm);
    this.props.thesaurusAssoc(this.state.searchTerm);
    this.props.thesaurusTheme(this.state.searchTerm);
    // Trnaslation actions
    this.props.translateEs(this.state.searchTerm);
    this.props.translateFr(this.state.searchTerm);
    this.props.translateIt(this.state.searchTerm);
    this.props.translateRu(this.state.searchTerm);
    this.props.translateDe(this.state.searchTerm);
  }

  render(){
    // console.log(this.state.searchTerm) // works

    return (
      <div>
        <DictionaryHeader />
        <div className="ui main text container main-content">
          <Divider section hidden />
          <h2>Enter a lexeme</h2>
          <SearchBar
            searchTerm={this.state.searchTerm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Divider section hidden/>
          <h3>Definition
            <Popup
              className="popup-icon"
              trigger={<Icon name='info circle' />}
              content='Find and compare lexical meanings.'
              size='mini'
            />
            <Divider />
          </h3>
          <DictionaryDefinition />
          <Divider section hidden />
          <ScrollableAnchor id={'thesaurus'}>
            <h3>Thesaurus
              <Popup
                className="popup-icon"
                trigger={<Icon name='info circle' />}
                content='Explore synonyms and antonyms.'
                size='mini'
              />
            </h3>
          </ScrollableAnchor>
          <Divider />
          {<DictionaryThesaurus />}
          <Divider section hidden />
          <ScrollableAnchor id={'translation'}>
            <h3>Translation
              <Popup
                className="popup-icon"
                trigger={<Icon name='info circle' />}
                content='Translate a lexeme into a number of languages.'
                size='mini'
              />
            </h3>
          </ScrollableAnchor>
          <Divider />
          {<DictionaryTranslation />}
          <Divider section hidden />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects // from ./reducers/projectReducer.js
  }
}

export default connect(mapStateToProps, { addProject, defineOxford, defineYandex, defineTwinword, defineWordsApi, defineUrban, thesaurusSyn, thesaurusAssoc, thesaurusTheme, translateEs, translateFr, translateIt, translateRu, translateDe })(DictionaryContainer);
