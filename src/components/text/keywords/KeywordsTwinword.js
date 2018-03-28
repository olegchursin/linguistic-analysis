import React from 'react'
import { connect } from 'react-redux'

const KeywordsTwinword = (props) => {
  console.log("Keywords Twinword", props.keywords)
  const keywords = props.keywords
  return (
    <div>
      {
        keywords
        ?
        <div>
          {
            keywords.map(keyword => <div className='keyword-result' key={keyword.word}>{keyword.word}</div>)
          }
          <div className="tag-powered-by">
            <p>Powered by: <a href="https://www.twinword.com/">Twinword</a></p>
          </div>
        </div>
        :
        <p>Twinword Keyword Extractor effectively extracts keywords and measure their relevance.</p>
      }
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
