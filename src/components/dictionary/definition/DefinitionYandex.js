import React from 'react'

// Redux
import { connect } from 'react-redux'

// Semantic UI
import { Divider } from 'semantic-ui-react'

const DefinitionYandex = (props) => {
  console.log("Yandex", props.definition)
  const definitionArr = props.definition

  let component;
  if (definitionArr.length) {
    component = <div>
      {
        definitionArr.map((def, index) => {
          return <div key={index}>
            <h3>{def.text}</h3>
            <p>{def.pos}  &#9642; / {def.ts} /</p>
            <div>
              {
                def.tr.map((tr, index) => {
                  return <div key={index}>
                    <div>
                      <Divider hidden />
                      <h5>{tr.text}</h5>
                      {
                        tr.syn
                        ?
                        <div>
                          Synonyms:
                          {
                            tr.syn.map((synonym, index) => {
                              return (
                                <span key={index}> {synonym.text}, </span>
                              )
                            })
                          }
                        </div>
                        :
                        <span></span>
                      }
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        })
      }
      <div className="tag-powered-by">
        <p>Powered by: <a href="http://api.yandex.com/dictionary">Yandex.Dictionary</a></p>
      </div>
    </div>
  } else {
    component = <p>Definition provided by <a href="http://api.yandex.com/dictionary">Yandex.Dictionary</a></p>
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
    definition: state.dictionary.definitionYandex // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(DefinitionYandex);
