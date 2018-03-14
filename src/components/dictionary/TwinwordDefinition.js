import React from 'react'

const TwinwordDefinition = (props) => {

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
    definitionTwinword: state.dictionary.definitionTwinword // from ./reducers/dictionaryReducer.js
  }
}

export default TwinwordDefinition;
