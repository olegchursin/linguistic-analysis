import React from 'react';
import { Input, Icon, Popup, Button } from 'semantic-ui-react';

const HashtagDefSearchBar = props => {
  return (
    <form onSubmit={props.handleDef}>
      <Popup
        trigger={
          <Input
            fluid
            iconPosition="left"
            action
            name="searchTerm"
            value={props.searchTerm}
            type="text"
            placeholder="Enter a hashtag..."
            onChange={props.handleChange}
          >
            <Icon name="hashtag" />
            <input />
            <Button type="submit">Search</Button>
          </Input>
        }
        header="Hashtag Definition"
        content='Enter a hashtag you want to define (e.g. "oomf", "tb", "cutenessoverload").'
        on="focus"
      />
    </form>
  );
};

export default HashtagDefSearchBar;
