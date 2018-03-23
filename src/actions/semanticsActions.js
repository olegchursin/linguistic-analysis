// Hashtag Reducer Actions
import SemanticsApi from "../services/semanticsApi";

// action to control isLoading state (display loader)
export const ANALYZING_TEXT = "ANALYZING_TEXT";

// define hashtag definition actions
export const SEMANTIC_ASSOC_LIST = "SEMANTIC_ASSOC_LIST";


// ////////////////////////////////////// //
// ////// SEMANTIC ANALYSIS ACTIONS ////// //
// ////////////////////////////////////// //

// Associative List
export function associativeList(inputText) {
    return function(dispatch) {
        dispatch({ type: ANALYZING_TEXT });
        SemanticsApi.associativeList(inputText)
            .then(res => {
                dispatch({ type: SEMANTIC_ASSOC_LIST, payload: res.response[0].items });
            });
    };
}