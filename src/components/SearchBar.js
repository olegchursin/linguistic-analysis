// Lexeme search
// rendered in DictioaneryContainer.js

import React from 'react';
import { Input, Popup } from 'semantic-ui-react'

const SearchBar = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Popup
        trigger={<Input fluid icon='search' name="searchTerm" value={props.searchTerm} type="text" placeholder='Search...' onChange={props.handleChange} />}
        header='Lexeme Search'
        content='Enter a lexeme you want to define, translate and find synonyms/antonyms of.'
        on='focus'
      />

    </form>
  )
}

export default SearchBar;
