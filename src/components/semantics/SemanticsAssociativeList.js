import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

const SemanticsAssociativeList = (props) => {
  console.log("Associative List", props.associativeList)
  return (
    <div>
      <h3></h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.hashtag.isLoading,
    associativeList: state.dictionary.associativeList, // from './reducers/dictionaryReducer.js'
  }
}

export default connect(mapStateToProps)(SemanticsAssociativeList);
