import React from 'react'
import { connect } from 'react-redux'

const TranslationIt = (props) => {
  console.log("Translate It", props.translation)
  return (
    <div>
      <p>
        English - Italian translation.
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    translation: state.dictionary.translationIt // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(TranslationIt);
