import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

// Semantic UI
import { Loader, Divider } from 'semantic-ui-react'


const SemanticsAssociativeList = (props) => {
  console.log("Associative List", props.associativeList)
  console.log("Loading", props.isLoading)

  const associativeList = props.associativeList

  let elements = associativeList.map((i, index) => {
    let color = '#ff5e6c'

    if (90 <= i.weight && i.weight <= 100) {
      color = '#ff5e6c'
    } else if (80 <= i.weight && i.weight <= 89) {
      color = '#ff706e'
    } else if (70 <= i.weight && i.weight <= 79) {
      color = '#ff7b6d'
    } else if (60 <= i.weight && i.weight <= 69) {
      color = '#ff866e'
    } else if (50 <= i.weight && i.weight <= 59) {
      color = '#ff9470'
    } else if (40 <= i.weight && i.weight <= 49) {
      color = '#ff9c6f'
    } else if (30 <= i.weight && i.weight <= 39) {
      color = '#ffa770'
    } else if (20 <= i.weight && i.weight <= 29) {
      color = '#ffb071'
    } else if (10 <= i.weight && i.weight <= 19) {
      color = '#ffba70'
    } else {
      color = '#ffc271'
    }

    return <div style={{backgroundColor: color}} className="keyword-result-borderless" key={index}>
      {i.item} ({i.weight})
    </div>
  })

    let component;

    if (props.isLoading) {
      component = <Loader active inline='centered'>Loading</Loader>
    } else if (associativeList.length) {
      component = <div>
        <p>Lexemes are displayed in the ascending order sorted by their (relative weight), and color-coded by their proximity to the defined concept.</p>
        {elements}
        <Divider hidden />
        <div className="tag-powered-by">
          <p>Powered by: <a href="Word Associations Network">Word Associations Network</a></p>
        </div>
      </div>
    } else {
      component = <p>An interconnected list of lexemes that share a common semantic property within the defined conceptual domain.</p>
    }

  return (
    <div>
      {component}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.semantics.isLoading,
    associativeList: state.semantics.associativeList
  }
}

export default connect(mapStateToProps)(SemanticsAssociativeList);
