import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

const HashtagSuggestion = (props) => {
  console.log("# Suggestion", props.suggestion)
  return (
    <div>

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
