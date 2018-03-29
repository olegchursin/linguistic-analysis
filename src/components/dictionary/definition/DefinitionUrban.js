import React from 'react'
import { connect } from 'react-redux'

// Semantic UI
import { Segment, Icon, Divider } from 'semantic-ui-react'


const DefinitionUrban = (props) => {
  console.log("Urban", props.definition)
  const definitionArr = props.definition.list

  let component;
  if (definitionArr.length) {
    component = <div>
      {
        definitionArr.map(definition => {
          return <Segment key={definition.defid}>
            <h3>{definition.word}</h3>
            <p>{definition.definition}</p>
            <Divider hidden />
            <p>Author: {definition.author}</p>
            <p><Icon color='blue' name='thumbs outline up' /> {definition.thumbs_up} | <Icon color='blue' name='thumbs outline down' /> {definition.thumbs_down}</p>
            <Divider hidden />
            <div className='tag-powered-by'>See defintion on <a href={definition.permalink}>UrbanDictionary.com</a></div>
          </Segment>
        })
      }
      <Divider hidden />
      <div className='tag-powered-by'>
        <p>Powered by: <a href="https://www.urbandictionary.com/">Urban Dictionary</a></p>
      </div>
    </div>
  } else {
    component = <p>Definition provided by <a href="https://www.urbandictionary.com/">Urban Dictionary</a></p>
  }

  return (
    <div>
      { component }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.dictionary.isLoading,
    definition: state.dictionary.definitionUrban // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(DefinitionUrban);
