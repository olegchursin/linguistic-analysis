import React from 'react'

const WordsApiDefinition = (props) => {

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

export default WordsApiDefinition;
