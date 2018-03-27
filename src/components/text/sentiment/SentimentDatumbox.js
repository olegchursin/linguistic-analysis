import React from 'react'
import { connect } from 'react-redux'

const SentimentDatumbox = (props) => {
  console.log("Sentiment Datumbox:", props.sentiment);
  const sentiment = props.sentiment
  return (
    <div>
      {
        sentiment.result
        ?
        <div>
          <h2>{ sentiment.result }</h2>
          <div className="tag-powered-by">
            <p>powered by: <a href="http://www.datumbox.com/machine-learning-api/">DatumBox</a></p>
          </div>
        </div>
        :
        <p><a href="http://www.datumbox.com/machine-learning-api/">DatumBox Sentiment Analysis</a> classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.</p>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.text.isLoading,
    sentiment: state.text.sentimentDatumbox // from ./reducers/textReducer.js
  }
}

export default connect(mapStateToProps)(SentimentDatumbox);
