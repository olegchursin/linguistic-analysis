import React from 'react'
import { connect } from 'react-redux'

const WordsApiDefinition = (props) => {
  console.log("WordsApi", props.definition)
  return (
    <div>
      <p>
        The WordsApi Definition.
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    definition: state.dictionary.definitionWordsApi // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(WordsApiDefinition);
