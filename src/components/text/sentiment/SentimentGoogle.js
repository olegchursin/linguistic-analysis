import React from 'react';
import { connect } from 'react-redux';

const SentimentGoogle = props => {
  return <div>Google Sentiment</div>;
};

const mapStateToProps = state => {
  return {
    isLoading: state.text.isLoading,
    sentiment: state.text.sentimentGoogle // from ./reducers/textReducer.js
  };
};

export default connect(mapStateToProps)(SentimentGoogle);
