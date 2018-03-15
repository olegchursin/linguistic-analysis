import React from 'react'
import { connect } from 'react-redux'

const YandexDefinition = (props) => {
  console.log("Yandex", props.definition)
  return (
    <div>
      <p>
        Yandex Definition
      </p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    definition: state.dictionary.definitionYandex // from ./reducers/dictionaryReducer.js
  }
}

export default connect(mapStateToProps)(YandexDefinition);
