import React from 'react'
import {connect} from 'react-redux'

const TextSummary = (props) => {
    console.log("Summary:", props.summary)
    return (
        <div>
            <p>{props.summary}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.text.isLoading, 
        summary: state.text.summaryText // from ./reducers/textReducer.js
    }
}

export default connect(mapStateToProps)(TextSummary);
