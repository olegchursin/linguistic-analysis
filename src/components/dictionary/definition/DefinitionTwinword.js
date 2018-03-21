import React from 'react'
import { connect } from 'react-redux'

const DefinitionTwinword = (props) => {
  console.log("Twinword", props.definition)
  const definition = props.definition
  return (
    <div>
      <h3>{definition.entry}</h3>
      <p>Pronunciation: [{definition.ipa}]</p>
      {definition.meaning.adjective ? <div><h5>Adjective</h5><p>{definition.meaning.adjective}</p></div> : <span></span>}
      {definition.meaning.adverb ? <div><h5>Adverb</h5><p>{definition.meaning.adverb}</p></div> : <span></span>}
      {definition.meaning.noun ? <div><h5>Noun</h5><p>{definition.meaning.noun}</p></div> : <span></span>}
      {definition.meaning.verb ? <div><h5>Verb</h5><p>{definition.meaning.verb}</p></div> : <span></span>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.dictionary.isLoading,
    definition: state.dictionary.definitionTwinword // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(DefinitionTwinword);
