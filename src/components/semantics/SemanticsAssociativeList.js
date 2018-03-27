import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'


const SemanticsAssociativeList = (props) => {
  console.log("Associative List", props.associativeList)
  const associativeList = props.associativeList

  let elements = associativeList.map(i => {
    let color = 'black'

    if (90 <= i.weight && i.weight <= 100) {
      color = '#f384a4'
    } else if (80 <= i.weight && i.weight <= 89) {
      color = '#f094a8'
    } else if (70 <= i.weight && i.weight <= 79) {
      color = '#f6ad89'
    } else if (60 <= i.weight && i.weight <= 69) {
      color = '#f2b372'
    } else if (50 <= i.weight && i.weight <= 59) {
      color = '#dec78e'
    } else if (40 <= i.weight && i.weight <= 49) {
      color = '#b9d1a3'
    } else if (30 <= i.weight && i.weight <= 39) {
      color = '#9cd4bf'
    } else if (20 <= i.weight && i.weight <= 29) {
      color = '#8ec8d1'
    } else {
      color = '#85bddd'
    }


    return <div style={{backgroundColor: color}} className="keyword-result-borderless" key={i.item}>
      {i.item} ({i.weight})
    </div>
  })

  return (
    <div>
      {
        elements
        ?
        <div>
          <p>Lexemes are displayed in the ascending order sorted by their weight within the list.</p>
          {elements}
        </div>
        :
        <p>An interconnected list of lexemes that share a common semantic property within the defined conceptual domain.</p>
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
