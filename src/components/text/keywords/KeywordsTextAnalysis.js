import React from 'react'
import { connect } from 'react-redux'

const KeywordsTextAnalysis = (props) => {
  console.log("Keywords", props.keywords)
  const keywords = props.keywords
  return (
    <div>
      {
        keywords.length
        ?
        keywords.map(keyword => <div className='keyword-result' key={keyword}>{keyword}</div>)
        :
        <p><a href="http://keywordextraction.net/">Keyword Extraction API</a> provides professional keyword extractor service which is based on advanced Natural Language Processing and Machine Learning technologies.</p>
      }
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
