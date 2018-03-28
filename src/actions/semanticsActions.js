// Hashtag Reducer Actions
import SemanticsApi from "../services/semanticsApi";

// action to control isLoading state (display loader)
export const ANALYZING_SEMANTIC = "ANALYZING_SEMANTIC";

// define hashtag definition actions
export const SEMANTIC_ASSOC_LIST = "SEMANTIC_ASSOC_LIST";

// ////////////////////////////////////// //
// ////// SEMANTIC ANALYSIS ACTIONS ////// //
// ////////////////////////////////////// //

// Associative List
export function associativeList(inputText) {
    return function(dispatch) {
        dispatch({ type: ANALYZING_SEMANTIC });
        SemanticsApi.associativeList(inputText)
            .then(res => {
              console.log("We are here")
                dispatch({ type: SEMANTIC_ASSOC_LIST, payload: res.response[0].items });
            });
    };
}
