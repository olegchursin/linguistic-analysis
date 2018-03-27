import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

const HashtagSuggestion = (props) => {
  console.log("# Suggestion", props.suggestion)
  // Initial inout/lexeme
  const input = props.suggestion.text
  const suggestionArr = props.suggestion.items

  return (
    <div>
      {
        suggestionArr
        ?
        <div>
          <h3>Conceptual domain: {input}</h3>
          <p>Lexemes are sorted by their (weight).</p>
          {
            suggestionArr.map((hashtag, index) => {
              return <div className="keyword-result" key={index}><div>{hashtag.item} ({hashtag.pos}): {hashtag.weight}</div></div>
            })
          }
        </div>
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
