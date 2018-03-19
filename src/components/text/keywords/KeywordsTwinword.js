import React from 'react'
import { connect } from 'react-redux'

const KeywordsTwinword = (props) => {
  console.log("Keywords Twinword", props.keywords)
  return (
    <div>Keywords:</div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.text.isLoading,
    keywords: state.text.sentimentTwinword.keywords // from ./reducers/textReducer.js
  }
}

export default connect(mapStateToProps)(KeywordsTwinword);
