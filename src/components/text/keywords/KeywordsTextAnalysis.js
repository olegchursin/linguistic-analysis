import React from 'react'
import { connect } from 'react-redux'

// Semantic UI
import { Loader } from 'semantic-ui-react'

const KeywordsTextAnalysis = (props) => {
  console.log("Keywords", props.keywords)
  const keywords = props.keywords

  let component;
  if (props.isLoading) {
    component = <Loader active inline='centered'>Loading</Loader>
  } else if (keywords.length) {
    component = <div>
                  {
                    keywords.map(keyword => <div className='keyword-result' key={keyword}>{keyword}</div>)
                  }
                  <div className="tag-powered-by">
                    <p>Powered by: <a href="http://textanalysisonline.com/">Text Analysis</a></p></div>
                </div>
  } else {
    component = <p><a href="http://keywordextraction.net/">Keyword Extraction API</a> provides professional keyword extractor service which is based on advanced Natural Language Processing and Machine Learning technologies.</p>
  }

  return (
    <div>
      {component}
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


// {
//   keywords.length
//   ?
//   <div>
//     {
//       keywords.map(keyword => <div className='keyword-result' key={keyword}>{keyword}</div>)
//     }
//     <div className="tag-powered-by">
//       <p>Powered by: <a href="http://textanalysisonline.com/">Text Analysis</a></p></div>
//   </div>
//
//   :
//   <p><a href="http://keywordextraction.net/">Keyword Extraction API</a> provides professional keyword extractor service which is based on advanced Natural Language Processing and Machine Learning technologies.</p>
// }
