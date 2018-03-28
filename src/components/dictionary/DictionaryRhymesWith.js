import React from 'react'
import { connect } from 'react-redux'

// Semantic UI
import { Segment } from 'semantic-ui-react'

const DictionaryRhymesWith = (props) => {
  console.log("Rhymes with", props.rhymesWith)
  const rhymesWithObj = props.rhymesWith
  return (
    <div>
      {
        rhymesWithObj.word
        ?
        <Segment>
          <h3>Lexemes rhyming with <span>{rhymesWithObj.word.toUpperCase()}</span></h3>
          {
            rhymesWithObj.rhymes.all.map(rhyme => {
              return <div className="keyword-result" key={rhyme}><div>{rhyme}</div></div>
            })
          }
          <div className="tag-powered-by">
            <p>Powered by: <a href="http://www.wordsapi.com">WordsAPI</a></p>
          </div>
        </Segment>
        :
        <p>Discover the list of lexemes that rhyme with the given word.</p>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    rhymesWith: state.dictionary.rhymesWith // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(DictionaryRhymesWith);
