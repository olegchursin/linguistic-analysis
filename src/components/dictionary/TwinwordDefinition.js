import React from 'react'
import { connect } from 'react-redux'

const TwinwordDefinition = (props) => {
  console.log("Twinword", props.definition)
  return (
    <div>
      <p>
        Twinword Definition
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    definition: state.dictionary.definitionTwinword // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(TwinwordDefinition);
