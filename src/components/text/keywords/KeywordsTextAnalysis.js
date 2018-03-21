import React from 'react'
import { connect } from 'react-redux'

const KeywordsTextAnalysis = (props) => {
  console.log("Keywords", props.keywords)
  const keywords = props.keywords
  return (
    <div>
      <h4>Keywords:</h4>
      {keywords ? keywords.map(keyword => <div key={keyword}>{keyword}</div>) : <span></span>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.text.isLoading,
    keywords: state.text.keywordsTextAnalysis // from ./reducers/textReducer.js
  }
}

export default connect(mapStateToProps)(KeywordsTextAnalysis);
