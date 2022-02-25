import React from 'react';
import { Input, Popup, Button } from 'semantic-ui-react';

const HashtagSuggestSearchBar = props => {
  return (
    <form onSubmit={props.handleSuggest}>
      <Popup
        trigger={
          <Input
            fluid
            action
            name="suggestInput"
            value={props.suggestInput}
            type="text"
            placeholder="Enter a lexeme to get suggestions..."
            onChange={props.handleChange}
          >
            <input />
            <Button type="submit">Search</Button>
          </Input>
        }
        header="Hashtag Suggestions"
        content="Enter a lexeme you want to get hashtag suggestions for."
        on="focus"
      />
    </form>
  );
};

export default HashtagSuggestSearchBar;
