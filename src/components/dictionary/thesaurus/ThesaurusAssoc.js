import React from 'react'
import { connect } from 'react-redux'

const ThesaurusAssoc = (props) => {
  console.log("Associations", props.associations)
  return (
    <div>
      <p>
        Associations
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    associations: state.dictionary.thesaurusAssoc // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(ThesaurusAssoc);
