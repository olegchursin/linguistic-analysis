import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

const HashtagDefinition = (props) => {
  console.log("# Definition", props.definition)
  const definitionArr = props.definition.defs
  return (
    <div>
      {definitionArr
        ?
        definitionArr.map(instance => {
          return <div key={instance.def.time}>
            <h4>{instance.def.hashtag}</h4>
            <p>{instance.def.text}</p>
            <p>Upvotes: {instance.def.upvotes} | Downvotes: {instance.def.downvotes}</p>
            <p>Powered by <a href='{def.uri}'>TagDef</a></p>
          </div>
        })
        :
        <p>Start your search by entering a hashtag into the search bar above.</p>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    definition: state.hashtag.hashtagDefinition // from ./reducers/hashtagReducer.js
  }
}

export default connect(mapStateToProps)(HashtagDefinition);
