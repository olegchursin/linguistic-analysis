import React from 'react'
import { connect } from 'react-redux'

const KeywordsTextAnalysis = (props) => {
  console.log("Keywords", props.keywords)
  return (
    <div>Keywords:</div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.text.isLoading,
    keywords: state.text.keywordsTextAnalysis // from ./reducers/textReducer.js
  }
}

export default connect(mapStateToProps)(KeywordsTextAnalysis);
