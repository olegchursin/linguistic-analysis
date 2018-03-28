import React from 'react'
import { connect } from 'react-redux'

const DefinitionYandex = (props) => {
  console.log("Yandex", props.definition)
  const definitionArr = props.definition
  return (
    <div>
      {
        definitionArr.map(def => {
          return <div key={def.ts}>
            <h3>{def.text}</h3>
            <p>POS: {def.pos}</p>
            <p>Pronunciation: [{def.ts}]</p>
            <ul>
              {
                def.tr.map(tr => {
                  return <li key={tr.text}>
                    <div>
                      <h5>{tr.text} ({tr.pos})</h5>
                      <p>Synonyms:</p>
                      {
                        tr.syn ? tr.syn.map(synonym => <p key={synonym.text}> {synonym.text} ({synonym.pos})</p>) : <span> </span>
                      }
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
        })
      }
      <div className="tag-powered-by">
        <p>Powered by: <a href="http://api.yandex.com/dictionary">Yandex.Dictionary</a></p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.dictionary.isLoading,
    definition: state.dictionary.definitionYandex // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(DefinitionYandex);
