import React from 'react'
import { connect } from 'react-redux'

const SentimentGoogle = (props) => {
  console.log(`Sentiment score: ${props.sentiment.score}`);
  console.log(`Sentiment magnitude: ${props.sentiment.magnitude}`);
  return (
    <div>Google Sentiment</div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.text.isLoading,
    sentiment: state.text.sentimentGoogle // from ./reducers/textReducer.js
  }
}

export default connect(mapStateToProps)(SentimentGoogle);
