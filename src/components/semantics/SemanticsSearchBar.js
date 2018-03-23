// Associative list search bar
// rendered in SemanticsContainer.js

import React from 'react';
import { Input, Popup, Button } from 'semantic-ui-react'

const SemanticsSearchBar = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Popup
        trigger={
          <Input
            fluid
            action
            name="searchTerm"
            value={props.searchTerm}
            type="text"
            placeholder='Define your conceptual domain...'
            onChange={props.handleChange}>
            <input />
            <Button type='submit'>Go</Button>
          </Input>
        }
        // header='Generate associative list'
        content='Enter a lexeme to define your conceptual domain.'
        on='focus'
      />

    </form>
  )
}

export default SemanticsSearchBar;
