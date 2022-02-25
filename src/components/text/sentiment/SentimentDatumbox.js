import React from 'react';
import { connect } from 'react-redux';

import { Loader } from 'semantic-ui-react';

const SentimentDatumbox = props => {
  const sentiment = props.sentiment;

  let component;
  if (props.isLoading) {
    component = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
  } else if (sentiment.result) {
    component = (
      <div>
        <h2>{sentiment.result}</h2>
        <div className="tag-powered-by">
          <p>
            Powered by:{' '}
            <a href="http://www.datumbox.com/machine-learning-api/">DatumBox</a>
          </p>
        </div>
      </div>
    );
  } else {
    component = (
      <p>
        <a href="http://www.datumbox.com/machine-learning-api/">
          DatumBox Sentiment Analysis
        </a>{' '}
        classifies documents as positive, negative or neutral (lack of
        sentiment) depending on whether they express a positive, negative or
        neutral opinion.
      </p>
    );
  }

  return <div>{component}</div>;
};

const mapStateToProps = state => {
  return {
    isLoading: state.text.isLoading,
    sentiment: state.text.sentimentDatumbox // from ./reducers/textReducer.js
  };
};

export default connect(mapStateToProps)(SentimentDatumbox);
