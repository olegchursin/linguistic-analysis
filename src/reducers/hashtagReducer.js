import { ANALYZING_TEXT, HASHTAG_DEF, HASHTAG_SUGGEST } from "../actions/hashtagActions";

const initialState = {
  hashtagDefinition: [],
  hashtagSuggestion: [],
  isLoading: false
}

function hashtagReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_TEXT:
      return { ...state, isLoading: true };
    // Hashtag Definition
    case HASHTAG_DEF:
      return { ...state, isLoading: false, hashtagDefinition: action.payload };
    // Hashtag Suggestion
    case HASHTAG_SUGGEST:
      return { ...state, isLoading: false, hashtagSuggestion: action.payload };

    // Default
    default:
      return state;
  }
}

export { hashtagReducer }
