import React from 'react'
import { connect } from 'react-redux'

const TranslationFr = (props) => {
  console.log("Translate Fr", props.translation)
  return (
    <div>
      <p>
        English - French translation.
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    translation: state.dictionary.translationFr // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(TranslationFr);
