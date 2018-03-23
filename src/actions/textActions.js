// Text Reducer Actions
import TextApi from "../services/textApi";

// action to control isLoading state (display loader)
export const ANALYZING_TEXT = "ANALYZING_TEXT";

// define keyword extractor actions
export const KEYWORDS_TEXTANALYSIS = "KEYWORDS_TEXTANALYSIS";

// define sentiment analysis actions
export const SENTIMENT_GOOGLE = "SENTIMENT_GOOGLE";
export const SENTIMENT_DATUMBOX = "SENTIMENT_DATUMBOX";
export const SENTIMENT_TWINWORD = "SENTIMENT_TWINWORD";

// define Summarize Text action
export const SUMMARY_TEXT = "SUMMARY_TEXT";


// ///////////////////////////////////////// //
// ////// KEYWORD EXTRACTION ACTIONS ////// //
// ///////////////////////////////////////// //

export function keywordsTextAnalysis(inputText) {
    return function(dispatch) {
        dispatch({ type: ANALYZING_TEXT });
        TextApi.keywordsTextAnalysis(inputText)
        .end(res => {
            dispatch({
                type: KEYWORDS_TEXTANALYSIS,
                payload: res.body.keywords
            });
        });
    };
}

// //////////////////////////////////////// //
// ////// SENTIMENT ANALYSIS ACTIONS ////// //
// //////////////////////////////////////// //

// Sentiment Datumbox
export function sentimentDatumbox(inputText) {
    return function(dispatch) {
        dispatch({ type: ANALYZING_TEXT });
        TextApi.sentimentDatumbox(inputText)
        .end(res => {
            dispatch({
                type: SENTIMENT_DATUMBOX,
                payload: res.body.output
            });
        });
    };
}

// Sentiment Twinword
export function sentimentTwinword(inputText) {
    return function(dispatch) {
        dispatch({ type: ANALYZING_TEXT });
        TextApi.sentimentTwinword(inputText)
        .end(res => {
            dispatch({
                type: SENTIMENT_TWINWORD,
                payload: res.body
            });
        });
    };
}

// ////////////////////////////////// //
// ////// TEXT SUMMARY ACTIONS ////// //
// ////////////////////////////////// //

export function summaryText(inputText) {
    return function (dispatch) {
        dispatch({type: ANALYZING_TEXT});
        TextApi.summaryText(inputText)
        .end(res => {
            dispatch({
                type: SUMMARY_TEXT, 
                payload: res.body
            });
        });
};
}