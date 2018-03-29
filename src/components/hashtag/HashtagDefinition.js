import React from 'react'

// Import Redux connect
import { connect } from 'react-redux'

// Semantic UI
import { Segment, Divider, Icon, Loader } from 'semantic-ui-react'

const HashtagDefinition = (props) => {
  console.log("# Definition", props.definition)
  const definitionRes = props.definition

  let component;
  if (props.isLoadingDef) {
    component = <Loader active inline='centered'>Loading</Loader>
  } else if (definitionRes.defs) {
    component = <div>
      {
        definitionRes.defs.map(instance => {
          return <div key={instance.def.time}>
            <Divider hidden />
            <Segment>
              <h3 className="defined-entry-hashtag">#{instance.def.hashtag}</h3>
              <p>{instance.def.text}</p>
              <p><Icon color='purple' name='thumbs outline up' /> {instance.def.upvotes} | <Icon color='purple' name='thumbs outline down' /> {instance.def.downvotes}</p>
              <div className='tag-powered-by'>
                <p>Powered by: <a href='{def.uri}'>TagDef</a></p>
              </div>
            </Segment>
          </div>
        })
      }
    </div>
  } else if (definitionRes.uri) {
    component = <p>uh oh...your #hashtag needs an English definition. Can you help? Add your defintion to <a href='{definitionRes.uri}'>TagDef</a>.</p>
  } else {
    component = <p>Start your search by entering a hashtag into the search bar above.</p>
  }

  return (
    <div>
      {component}
      <Divider section hidden />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoadingDef: state.hashtag.isLoadingDef,
    definition: state.hashtag.hashtagDefinition // from ./reducers/hashtagReducer.js
  }
}

export default connect(mapStateToProps)(HashtagDefinition);
