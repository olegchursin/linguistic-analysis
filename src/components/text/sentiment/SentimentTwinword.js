import React from 'react'
import { connect } from 'react-redux'

const SentimentTwinword = (props) => {
  console.log("Sentiment Twinword:", props.sentiment);
  const sentiment = props.sentiment
  return (
    <div>
      <h1>{sentiment.type}</h1>
      <p>Score: {sentiment.score}</p>
      <h3>Keywords and their weight in the final score</h3>
      <ul>
        {
          sentiment.keywords.map(keyword => {
            return <li key={keyword.word}>{keyword.word} ({keyword.score})</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.text.isLoading,
    sentiment: state.text.sentimentTwinword // from ./reducers/textReducer.js
  }
}

export default connect(mapStateToProps)(SentimentTwinword);
