import React from 'react'
import { connect } from 'react-redux'

const ThesaurusTheme = (props) => {
  console.log("Theme", props.theme)
  return (
    <div>
      <p>
        Theme
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    theme: state.dictionary.thesaurusTheme // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(ThesaurusTheme);
