import React from 'react'
import { connect } from 'react-redux'

const TranslationDe = (props) => {
  console.log("Translate De", props.translation)
  return (
    <div>
      <p>
        English - German translation.
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    translation: state.dictionary.translationDe // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(TranslationDe);
