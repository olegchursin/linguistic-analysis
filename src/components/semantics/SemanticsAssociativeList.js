import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

// Semantic UI
import { Card } from 'semantic-ui-react'

const SemanticsAssociativeList = (props) => {
  console.log("Associative List", props.associativeList)
  const associativeList = props.associativeList
  return (
    <div>
      {
        associativeList.map(i => {
          return <div key={i.item}>{i.item} (Weight: {i.weight}, pos: {i.pos})</div>
        })
      }
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
