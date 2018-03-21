import React from 'react'
import { connect } from 'react-redux'


const DefinitionUrban = (props) => {
  console.log("Urban", props.definition)
  const definitionArr = props.definition.list
  return (
    <div>
      {
        definitionArr.map(definition => {
          return <div key={definition.defid}>
            <h4>{definition.word}</h4>
            <p>{definition.definition}</p>
            <p>Author: {definition.author}</p>
            <p>Thumbs up: {definition.thumbs_up} | Thumbs down: {definition.thumbs_down}</p>
            <p><a href={definition.permalink}>See defintion on UrbanDictionary.com</a></p>
          </div>
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.dictionary.isLoading,
    definition: state.dictionary.definitionUrban // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(DefinitionUrban);
