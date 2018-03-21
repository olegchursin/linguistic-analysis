// hashtag search
// rendered in HashtagContainer.js

import React from 'react';
import { Input, Popup } from 'semantic-ui-react'

const HashtagSearchBar = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Popup
        trigger={<Input fluid icon='search' name="searchTerm" value={props.searchTerm} type="text" placeholder='# Search...' onChange={props.handleChange} />}
        header='Hashtag Search'
        content='Enter a hashtag you want to define, analyse and have fun with.'
        on='focus'
      />

    </form>
  )
}

export default HashtagSearchBar;
