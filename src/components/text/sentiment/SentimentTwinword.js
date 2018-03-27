import React from 'react'
import { connect } from 'react-redux'

const SentimentTwinword = (props) => {
  console.log("Sentiment Twinword:", props.sentiment);
  const sentiment = props.sentiment
  return (
    <div>
      {
        sentiment.keywords
        ?
        <div>
          <h2>{sentiment.type}</h2>
          <p>Score: {sentiment.score}</p>
          <h3>Keywords and their weight in the final score</h3>
          <ul>
            {
              sentiment.keywords.map(keyword => {
                return <li key={keyword.word}>{keyword.word} ({keyword.score})</li>
              })
            }
          </ul>
          <div className="tag-powered-by">
            <p>powered by: <a href="https://www.twinword.com/">Twinword</a></p>
          </div>
        </div>
        :
        <p>Sentiment Analysis by Twinword helps you make educated guesses whether an inout is positive, negative, or neutral.</p>
      }
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
