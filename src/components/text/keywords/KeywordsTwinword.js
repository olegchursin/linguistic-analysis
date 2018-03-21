import React from 'react'
import { connect } from 'react-redux'

const KeywordsTwinword = (props) => {
  console.log("Keywords Twinword", props.keywords)
  const keywords = props.keywords
  return (
    <div>
      <h4>Keywords:</h4>
      {keywords ? keywords.map(keyword => <div key={keyword.word}>{keyword.word}</div>) : <span></span>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.text.isLoading,
    keywords: state.text.sentimentTwinword.keywords // from ./reducers/textReducer.js
  }
}

export default connect(mapStateToProps)(KeywordsTwinword);
