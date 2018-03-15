import React from 'react'

const UrbanDefinition = (props) => {
  console.log("Urban", props.defintion)
  return (
    <div>
      <p>
        The Urban Definition
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    definition: state.dictionary.definitionUrban // from ./reducers/dictionaryReducer.js
  }
}

export default UrbanDefinition;
