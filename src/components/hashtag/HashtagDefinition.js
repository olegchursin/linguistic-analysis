import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

// Semantic UI
import { Segment, Divider } from 'semantic-ui-react'

const HashtagDefinition = (props) => {
  console.log("# Definition", props.definition)
  const definitionRes = props.definition
  return (
    <div>
      {
        definitionRes.defs
        ?
        definitionRes.defs.map(instance => {
          return <div key={instance.def.time}>
            <Segment>
              <p>{instance.def.text}</p>
              <p>Upvotes: {instance.def.upvotes} | Downvotes: {instance.def.downvotes}</p>
              <p>Powered by <a href='{def.uri}'>TagDef</a></p>
            </Segment>
          </div>
        })
        :
        definitionRes.uri
        ?
        <p>uh oh...your #hashtag needs an English definition. Can you help? Add your defintion to <a href='{definitionRes.uri}'>TagDef</a>.</p>
        :
        <p>Start your search by entering a hashtag into the search bar above.</p>
      }
      <Divider section hidden />
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



  // <p>uh oh...your #hashtag needs an English definition, Can you help? Add your defintion to <a href=`{definitionRes.uri}`>TagDef</a>.</p>
