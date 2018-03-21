import React from 'react'
import { connect } from 'react-redux'

const ThesaurusAssoc = (props) => {
  console.log("Associations", props.associations)
  const associations = props.associations
  return (
    <div>
      {
        associations.map(assoc => {
          return <div key={assoc}>{assoc}</div>
        })
      }
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
