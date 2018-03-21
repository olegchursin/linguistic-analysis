import React from 'react'
import { connect } from 'react-redux'

const SentimentDatumbox = (props) => {
  console.log("Sentiment Datumbox:", props.sentiment);
  const sentiment = props.sentiment
  return (
    <h1>
      {
        sentiment.result
      }
    </h1>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.text.isLoading,
    sentiment: state.text.sentimentDatumbox // from ./reducers/textReducer.js
  }
}

export default connect(mapStateToProps)(SentimentDatumbox);
