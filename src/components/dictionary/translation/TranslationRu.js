import React from 'react'
import { connect } from 'react-redux'

const TranslationRu = (props) => {
  console.log("Translate Ru", props.translation)
  return (
    <div>
      <p>
        English - Russian translation.
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    translation: state.dictionary.translationRu // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(TranslationRu);
