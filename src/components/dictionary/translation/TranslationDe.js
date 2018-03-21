import React from 'react'
import { connect } from 'react-redux'

const TranslationDe = (props) => {
  console.log("Translate De", props.translation)
  const translation = props.translation
  return (
      <div>
        {
          translation.map(entry => {
            return <div><p>POS: {entry.pos} | Pronunciation: {entry.ts}</p>
                <ul>
                  {
                    entry.tr.map(trEntry => {
                      return <li>{trEntry.text} | Gender: {trEntry.gen} | POS: {trEntry.pos}</li>
                    })
                  }
                </ul>
              </div>
          })
        }
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    translation: state.dictionary.translationDe // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(TranslationDe);
