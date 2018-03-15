import React from 'react'
import { connect } from 'react-redux'


const UrbanDefinition = (props) => {
  console.log("Urban", props.definition)
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

export default connect(mapStateToProps)(UrbanDefinition);
