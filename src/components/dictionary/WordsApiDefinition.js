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
    definitionWordsApi: state.dictionary.definitionWordsApi // from ./reducers/dictionaryReducer.js
  }
}

export default WordsApiDefinition;
