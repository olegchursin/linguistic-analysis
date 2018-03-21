// Hashtag Reducer Actions
import HashtagApi from "../services/hashtagApi";

// action to control isLoading state (display loader)
export const ANALYZING_TEXT = "ANALYZING_TEXT";

// define hashtag definition actions
export const HASHTAG_DEF = "HASHTAG_DEF";


// ////////////////////////////////////// //
// ////// HASHTAG ANALYSIS ACTIONS ////// //
// ////////////////////////////////////// //
// Sentiment Google
export function hashtagDefinition(inputText) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_TEXT });
    HashtagApi.hashtagDefinition(inputText)
    .then(res => {
      dispatch({ type: HASHTAG_DEF, payload: res});
    });
  };
}
