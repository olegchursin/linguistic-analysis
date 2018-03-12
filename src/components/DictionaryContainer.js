import React from 'react';

import DictionaryDefinition from './DictionaryDefinition';
import SearchBar from './SearchBar';


class DictionaryContainer extends React.Component {
  state = {
    definitionOxford: [],
    definitionWords: [],
    definitionCambridge: [],
    searchTerm: ''
  }
  // CORS anywhere patch
  // https://cors-anywhere.herokuapp.com/

  handleFetch = () => {
    console.log("fetching")
    fetch(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v1/entries/en/${this.state.searchTerm}`, {
      headers: {
        "Accept": "application/json",
        "app_id": 'a30a1a5e',
        "app_key": 'b42a1bcf088e52727e8626ce2716e073'
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        definitionOxford: res.results[0].lexicalEntries
      }, () => console.log(this.state.definitionOxford))
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleFetch();
  }

  render(){
    return (
      <div className="ui main text container">
        <h1>Enter a word to define</h1>
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <DictionaryDefinition
          definitionOxford={this.state.definitionOxford}
          definitionCambridge={this.state.definitionCambridge}
          definitionWords={this.state.definitionWords}
        />
      </div>
    )
  }
}

export default DictionaryContainer;
