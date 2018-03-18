import { ANALYZING_TEXT, KEYWORDS_TEXTANALYSIS } from "../actions/textActions";

const initialState = {
  keywordsTextAnalysis: [],
  isLoading: false
}

function textReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_TEXT:
      return { ...state, isLoading: true };
    // Keyword Extraction
    case KEYWORDS_TEXTANALYSIS:
      return { ...state, isLoading: false, keywordsTextAnalysis: action.payload };

    // Default
    default:
      return state;
  }
}

export { textReducer }
