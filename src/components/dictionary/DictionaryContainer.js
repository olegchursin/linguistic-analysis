import React from 'react';

// Redux
import { connect } from 'react-redux'
import { Icon, Popup } from 'semantic-ui-react'
import { defineOxford, defineYandex, defineTwinword, defineWordsApi, defineUrban } from '../../actions/dictionaryActions'
import { addProject } from '../../actions/projectActions'

// Components
import DictionaryDefinition from './DictionaryDefinition';
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
    this.props.defineOxford(this.state.searchTerm);
    this.props.defineYandex(this.state.searchTerm);
    this.props.defineTwinword(this.state.searchTerm);
    this.props.defineWordsApi(this.state.searchTerm);
    this.props.defineUrban(this.state.searchTerm);
  }

  render(){
    return (
      <div className="ui main text container">
        <h1>Enter a lexeme</h1>
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <h3>Definition
          <Popup
            className="popup-icon"
            trigger={<Icon name='info circle' />}
            content='Hello. This is a mini popup'
            size='mini'
          />
        </h3>
        <DictionaryDefinition />
        <h3>Thesaurus
          <Popup
            className="popup-icon"
            trigger={<Icon name='info circle' />}
            content='Hello. This is a mini popup'
            size='mini'
          />
        </h3>
        {/* <Thesaurus /> */}
        <h3>Translation
          <Popup
            className="popup-icon"
            trigger={<Icon name='info circle' />}
            content='Hello. This is a mini popup'
            size='mini'
          />
        </h3>
        {/* <Translation /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects // from ./reducers/projectReducer.js
  }
}

export default connect(mapStateToProps, { addProject, defineOxford, defineYandex, defineTwinword, defineWordsApi, defineUrban })(DictionaryContainer);
