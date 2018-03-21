import React from 'react'
import { connect } from 'react-redux'

const ThesaurusSyn = (props) => {
  console.log("Synonyms", props.synonyms)
  const synonymsArr = props.synonyms
  return (
    <div>
      <p>Words that can be interchanged for the original word in the same context.</p>
      {
        synonymsArr.map(synObj => {
          return <div key={synObj.id}>{synObj.text}</div>
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    synonyms: state.dictionary.thesaurusSyn // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(ThesaurusSyn);
