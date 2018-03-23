import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

const SemanticsAssociativeList = (props) => {
  console.log("Associative List", props.associativeList)
  return (
    <div>
      {/* {
        associativeList.map(i => {
          return <div key=></div>
        })
      } */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.hashtag.isLoading,
    associativeList: state.semantics.associativeList
    // associativeList: state.dictionary.associativeList, // from './reducers/dictionaryReducer.js'
  }
}

export default connect(mapStateToProps)(SemanticsAssociativeList);
