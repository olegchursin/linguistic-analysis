// Hashtag Reducer Actions
import HashtagApi from '../services/hashtagApi';

// action to control isLoading state (display loader)
export const ANALYZING_DEF = 'ANALYZING_DEF';
export const ANALYZING_SUGGEST = 'ANALYZING_SUGGEST';

// define hashtag definition actions
export const HASHTAG_DEF = 'HASHTAG_DEF';
export const HASHTAG_SUGGEST = 'HASHTAG_SUGGEST';

// ////////////////////////////////////// //
// ////// HASHTAG ANALYSIS ACTIONS ////// //
// ////////////////////////////////////// //

// Hashtag Definition
export function hashtagDefinition(inputText) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_DEF });
    HashtagApi.hashtagDefinition(inputText).then(res => {
      dispatch({ type: HASHTAG_DEF, payload: res });
    });
  };
}

// Hashtag Suggestion
export function hashtagSuggestion(suggestInput) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_SUGGEST });
    HashtagApi.hashtagSuggestion(suggestInput).then(res => {
      dispatch({ type: HASHTAG_SUGGEST, payload: res.response[0].items });
    });
  };
}
