import React from 'react'
import { connect } from 'react-redux'

const TranslationRu = (props) => {
  console.log("Translate Ru", props.translation)
  const translation = props.translation
  return (
      <div>
        {
          translation.map(entry => {
            return <div key={entry.text}><p>POS: {entry.pos} | Pronunciation: {entry.ts}</p>
                <ul>
                  {
                    entry.tr.map(trEntry => {
                      return <li key={trEntry.text}>{trEntry.text} | Gender: {trEntry.gen} | POS: {trEntry.pos}</li>
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
    translation: state.dictionary.translationRu // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(TranslationRu);
