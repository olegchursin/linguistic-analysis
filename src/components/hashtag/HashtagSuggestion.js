import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

const HashtagSuggestion = (props) => {
  console.log("# Suggestion", props.suggestion)
  // Initial inout/lexeme
  const input = props.suggestion.text
  const suggestionArr = props.suggestion.items

  // TODO: -- developer | Error handling. If (suggestionArr.length === 0), render "No suggestions were found for your entry. Please try another lexeme."
  return (
    <div>
      <h4>{input}</h4>
      {suggestionArr
        ?
        suggestionArr.map((instance, index) => {
          return <div key={index}>
            {instance.item} (Weight: {instance.weight}) | POS: {instance.pos}
          </div>
        })
        :
        <p>Please start your search by entering a lexeme in the search bar above.</p>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    suggestion: state.hashtag.hashtagSuggestion // from ./reducers/hashtagReducer.js
  }
}

export default connect(mapStateToProps)(HashtagSuggestion);
