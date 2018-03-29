import React from 'react'
import { connect } from 'react-redux'

// Semantic UI
import { Divider } from 'semantic-ui-react'

const DefinitionTwinword = (props) => {
  console.log("Twinword", props.definition)
  const definition = props.definition

  let component;
  if (definition.meaning) {
    component = <div>
      <h3>{definition.entry}</h3>
      <p>/ {definition.ipa} /</p>
      {
        definition.meaning.adjective
        ?
        <div>
          <Divider hidden />
          <h5>Adjective</h5>
          <p>{definition.meaning.adjective}</p>
        </div>
        :
        <span></span>
      }
      {
        definition.meaning.adverb
        ?
        <div>
          <Divider hidden />
          <h5>Adverb</h5>
          <p>{definition.meaning.adverb}</p>
        </div>
        :
        <span></span>
      }
      {
        definition.meaning.noun
        ?
        <div>
          <Divider hidden />
          <h5>Noun</h5><p>{definition.meaning.noun}</p>
        </div>
      :
      <span></span>
      }
      {
        definition.meaning.verb
        ?
        <div>
          <Divider hidden />
          <h5>Verb</h5>
          <p>{definition.meaning.verb}</p>
        </div>
      :
      <span></span>
      }
      <Divider hidden />
      <div className='tag-powered-by'>
        <p>Powered by: <a href='https://www.twinword.com/'>Twinword</a></p>
      </div>
    </div>
  } else {
    component = <p>Definition provided by <a href='https://www.twinword.com/'>Twinword</a></p>
  }

  return (
    <div>
      { component }
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
