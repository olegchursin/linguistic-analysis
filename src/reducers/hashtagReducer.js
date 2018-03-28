import { ANALYZING_DEF, ANALYZING_SUGGEST, HASHTAG_DEF, HASHTAG_SUGGEST } from "../actions/hashtagActions";

const initialState = {
  hashtagDefinition: [],
  hashtagSuggestion: [],
  isLoadingDef: false,
  isLoadingSuggest: false
}

function hashtagReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_DEF:
      return { ...state, isLoadingDef: true };
    case ANALYZING_SUGGEST:
      return { ...state, isLoadingSuggest: true };
    // Hashtag Definition
    case HASHTAG_DEF:
      return { ...state, isLoadingDef: false, hashtagDefinition: action.payload };
    // Hashtag Suggestion
    case HASHTAG_SUGGEST:
      return { ...state, isLoadingSuggest: false, hashtagSuggestion: action.payload };

    // Default
    default:
      return state;
  }
}

export { hashtagReducer }
