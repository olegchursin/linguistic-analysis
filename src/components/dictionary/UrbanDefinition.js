import React from 'react'

const UrbanDefinition = (props) => {

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
    definitionUrban: state.dictionary.definitionUrban // from ./reducers/dictionaryReducer.js
  }
}

export default UrbanDefinition;
