import React from 'react'
import { connect } from 'react-redux'

const ThesaurusSyn = (props) => {
  console.log("Synonyms", props.synonyms)
  return (
    <div>
      <p>
        Synonyms
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    synonyms: state.dictionary.thesaurusSyn // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(ThesaurusSyn);
