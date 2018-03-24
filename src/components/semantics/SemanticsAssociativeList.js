import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

// Semantic UI
import { Button, Label } from 'semantic-ui-react'

const SemanticsAssociativeList = (props) => {
  console.log("Associative List", props.associativeList)
  const associativeList = props.associativeList

  let elements = associativeList.map(i => {
    let color = 'pink'

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

    return <div key={i.item}>
      <Button as='div' labelPosition='right'>
        <Button basic color={color}>
          <h4>{i.item}</h4>
        </Button>
        <Label as='a' basic color={color} pointing='left'>{i.weight}</Label>
      </Button>

      {/* <Segment
        color={color}
      >
        <h3>{i.item}</h3> {i.pos} | Weight: {i.weight}
      </Segment> */}
    </div>
  })

  return (
    <div>{elements}</div>
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
