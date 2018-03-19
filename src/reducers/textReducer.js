import { ANALYZING_TEXT, KEYWORDS_TEXTANALYSIS, SENTIMENT_GOOGLE, SENTIMENT_DATUMBOX, SENTIMENT_TWINWORD } from "../actions/textActions";

const initialState = {
  keywordsTextAnalysis: [],
  sentimentGoogle: [],
  sentimentDatumbox: '',
  sentimentTwinword: [],
  isLoading: false
}

function textReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_TEXT:
      return { ...state, isLoading: true };
    // Keyword Extraction
    case KEYWORDS_TEXTANALYSIS:
      return { ...state, isLoading: false, keywordsTextAnalysis: action.payload };
    // Sentiment google
    case SENTIMENT_GOOGLE:
      return { ...state, isLoading: false, sentimentGoogle: action.payload };
    case SENTIMENT_DATUMBOX:
      return { ...state, isLoading: false, sentimentDatumbox: action.payload };
    case SENTIMENT_TWINWORD:
      return { ...state, isLoading: false, sentimentTwinword: action.payload };

    // Default
    default:
      return state;
  }
}

export { textReducer }
