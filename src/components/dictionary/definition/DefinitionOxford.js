import React from 'react'
import { connect } from 'react-redux'

const DefinitionOxford = (props) => {
  console.log("Oxford", props.definition)
  const definitionArr = props.definition
  return (
    <div>
      {
        definitionArr.length !== 0
        ?
        definitionArr.map(def => {
          return <div key={def.lexicalCategory}>
            <h3>{def.text}</h3>
            <div className="definition-subheader">
              <span>{def.lexicalCategory}</span>
              <span>
                {
                  def.pronunciations.map(pronunciation => {
                    return <p key={pronunciation.phoneticSpelling}>Pronunciation: [{pronunciation.phoneticSpelling}] | <a href='{pronunciation.Audiofile}'>Audiofile</a></p>
                  })
                }
              </span>
            </div>
            <ul>
              {
                def.entries.map(entry => {
                  return <li key={entry.homographNumber}>
                    <div>
                      {
                        entry.etymologies ?  entry.etymologies.map(etymology => <p key={etymology}>{etymology}</p>) : <p>Etymology undefined.</p>
                      }
                    </div>
                    {
                      entry.senses.map(sense => {
                        return <div key={sense.id}>
                          <div>
                            {
                              sense.definitions.map(definition => {
                                return <p key={definition}>{definition}</p>
                              })
                            }
                          </div>
                        </div>
                      })
                    }
                  </li>
                })
              }
            </ul>
          </div>
        })
        :
        <p>The Oxford English Dictionary (OED) is the accepted authority on the English language, providing an unsurpassed guide to the meaning, history, and pronunciation of more than 280,000 entries – past and present – from across the English-speaking world.</p>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.dictionary.isLoading,
    definition: state.dictionary.definitionOxford // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(DefinitionOxford);
