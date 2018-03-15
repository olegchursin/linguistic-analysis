import React from 'react'
import { connect } from 'react-redux'

const TranslationEs = (props) => {
  console.log("Translate Es", props.translation)
  return (
    <div>
      <p>
        English - Spanish translation.
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    translation: state.dictionary.translationEs // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(TranslationEs);
