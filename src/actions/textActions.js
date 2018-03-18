// Text Reducer Actions
import TextApi from "../services/textApi";

// action to control isLoading state (display loader)
export const ANALYZING_TEXT = "ANALYZING_TEXT";

// define keyword extractor actions
export const KEYWORDS_TEXTANALYSIS = "KEYWORDS_TEXTANALYSIS";


// ///////////////////////////////////////// //
// ////// KEYWORD EXTRACTION ACTIONS ////// //
// ///////////////////////////////////////// //

export function keywordsTextAnalysis(inputText) {
  return function(dispatch) {
    dispatch({ type: ANALYZING_TEXT });
    TextApi.keywordsTextAnalysis(inputText)
    .end(res => {
      dispatch({ type: KEYWORDS_TEXTANALYSIS, payload: res.body.keywords
      });
    });
  };
}
