import React from 'react'
import { connect } from 'react-redux'

const ThesaurusAnt = (props) => {
  console.log("Antonyms", props.antonyms)
  return (
    <div>
      <p>
        Antonyms
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    antonyms: state.dictionary.thesaurusAnt // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(ThesaurusAnt);
