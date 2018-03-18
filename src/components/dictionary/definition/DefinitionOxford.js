import React from 'react'
import { connect } from 'react-redux'

const DefinitionOxford = (props) => {
  console.log("Oxford", props.definition)
  return (
    <div>
      <p>
        The Oxford English Dictionary (OED) is the accepted authority on the English language, providing an unsurpassed guide to the meaning, history, and pronunciation of more than 280,000 entries – past and present – from across the English-speaking world.
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.dictionary.isLoading,
    definition: state.dictionary.definitionOxford // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(DefinitionOxford);
