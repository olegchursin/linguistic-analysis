import React from 'react'

// Redux
import { connect } from 'react-redux'

// Semantic UI
import { Divider, Loader } from 'semantic-ui-react'

const ThesaurusSyn = (props) => {
  console.log("Synonyms", props.synonyms)

  const synonymsArr = props.synonyms

  let component;
  if (props.isLoading) {
    component = <Loader active inline='centered'>Loading</Loader>
  } else if (synonymsArr.length) {
    component = <div>
      {
        synonymsArr.map(synObj => {
          return <div className="keyword-result" key={synObj.id}>{synObj.text}</div>
        })
      }
      <Divider hidden/>
      <div className='tag-powered-by'>
        <p>Powered by: <a href='https://en.oxforddictionaries.com/'>Oxford Dictionary</a></p>
      </div>
    </div>
  } else {
    component = <p>Words that can be interchanged for the original word in the same context.</p>
  }


  return (
    <div>
      {component}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.dictionary.isLoadingSyn,
    synonyms: state.dictionary.thesaurusSyn // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(ThesaurusSyn);
