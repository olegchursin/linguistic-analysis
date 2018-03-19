import React from 'react'
import { connect } from 'react-redux'

const SentimentTwinword = (props) => {
  console.log("Sentiment Twinword:", props.sentiment);
  return (
    <div>Twinword Sentiment</div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.text.isLoading,
    sentiment: state.text.sentimentTwinword // from ./reducers/textReducer.js
  }
}

export default connect(mapStateToProps)(SentimentTwinword);
