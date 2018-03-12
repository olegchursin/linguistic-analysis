import React from 'react';
import { Input } from 'semantic-ui-react'

const SearchBar = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Input fluid icon='search' name="searchTerm" value={props.searchTerm} type="text" placeholder='Search...' onChange={props.handleChange} />
    </form>
  )
}

export default SearchBar;
