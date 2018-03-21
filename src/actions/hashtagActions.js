// Hashtag Reducer Actions
import HashtagApi from "../services/hashtagApi";

// action to control isLoading state (display loader)
export const ANALYZING_TEXT = "ANALYZING_TEXT";

// define hashtag definition actions
export const HASHTAG_DEF = "HASHTAG_DEF";
export const HASHTAG_SUGGEST = "HASHTAG_SUGGEST";


// ////////////////////////////////////// //
// ////// HASHTAG ANALYSIS ACTIONS ////// //
// ////////////////////////////////////// //

// Hashtag Definition
export function hashtagDefinition(inputText) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_TEXT });
    HashtagApi.hashtagDefinition(inputText)
    .then(res => {
      dispatch({ type: HASHTAG_DEF, payload: res});
    });
  };
}

// Hashtag Suggestion
export function hashtagSuggestion(inputText) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_TEXT });
    HashtagApi.hashtagSuggestion(inputText)
    .end(res => {
      dispatch({ type: HASHTAG_SUGGEST, payload: res});
    });
  };
}
