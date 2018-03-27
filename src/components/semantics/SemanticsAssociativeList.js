import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

// Semantic UI
import { Button, Label } from 'semantic-ui-react'

const SemanticsAssociativeList = (props) => {
  console.log("Associative List", props.associativeList)
  const associativeList = props.associativeList

  let elements = associativeList.map(i => {
    let color = 'black'

    if (90 <= i.weight <= 100) {
      color = 'red'
    } else if (80 <= i.weight <= 89) {
      color = 'pink'
    } else if (70 <= i.weight <= 79) {
      color = 'orange'
    } else if (60 <= i.weight <= 69) {
      color = 'yellow'
    } else if (50 <= i.weight <= 59) {
      color = 'olive'
    } else {
      color = 'green'
    }

    return <div className="keyword-result" key={i.item}>
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
