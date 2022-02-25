import React from 'react';

import { connect } from 'react-redux';

import { Loader } from 'semantic-ui-react';

const HashtagSuggestion = props => {
  const suggestionArr = props.suggestion;

  let elements = suggestionArr.map((hashtag, index) => {
    let color = '#7f0280';

    if (90 <= hashtag.weight && hashtag.weight <= 100) {
      color = '#7f0280';
    } else if (80 <= hashtag.weight && hashtag.weight <= 89) {
      color = '#8d1b88';
    } else if (70 <= hashtag.weight && hashtag.weight <= 79) {
      color = '#9b3291';
    } else if (60 <= hashtag.weight && hashtag.weight <= 69) {
      color = '#a33d95';
    } else if (50 <= hashtag.weight && hashtag.weight <= 59) {
      color = '#ba5ea2';
    } else if (40 <= hashtag.weight && hashtag.weight <= 49) {
      color = '#ca75ad';
    } else if (30 <= hashtag.weight && hashtag.weight <= 39) {
      color = '#dc8fb7';
    } else if (20 <= hashtag.weight && hashtag.weight <= 29) {
      color = '#e8a1be';
    } else if (10 <= hashtag.weight && hashtag.weight <= 19) {
      color = '#f5b3c6';
    } else {
      color = '#febfcc';
    }

    return (
      <div
        style={{ backgroundColor: color }}
        className="keyword-result-borderless-inverted"
        key={index}
      >
        <div>
          {hashtag.item} ({hashtag.pos}): {hashtag.weight}
        </div>
      </div>
    );
  });

  let component;
  if (props.isLoadingSuggest) {
    component = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
  } else if (suggestionArr) {
    component = (
      <div>
        <p>Lexemes are sorted by weight.</p>
        {elements}
      </div>
    );
  } else {
    <p>
      Please start your search by entering a lexeme in the search bar above.
    </p>;
  }

  return <div>{component}</div>;
};

const mapStateToProps = state => {
  return {
    isLoadingSuggest: state.hashtag.isLoadingSuggest,
    suggestion: state.hashtag.hashtagSuggestion // from ./reducers/hashtagReducer.js
  };
};

export default connect(mapStateToProps)(HashtagSuggestion);
