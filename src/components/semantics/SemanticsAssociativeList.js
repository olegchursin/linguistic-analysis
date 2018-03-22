import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

const SemanticsAssociativeList = (props) => {
  console.log("Semantic Suggestions", props.suggestions)
  console.log("Semantic Associations", props.associations)
  console.log("Semantic Synonyms", props.synonyms)
  return (
    <div>
      <h3></h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.hashtag.isLoading,
    suggestions: state.hashtag.hashtagSuggestion, // from './reducers/hashtagReducer.js'
    associations: state.dictionary.thesaurusAssoc, // from './reducers/dictionaryReducer.js'
    synonyms: state.dictionary.thesaurusSyn, // from './reducers/dictionaryReducer.js'
  }
}

export default connect(mapStateToProps)(SemanticsAssociativeList);
