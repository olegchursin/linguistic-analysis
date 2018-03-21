import { ANALYZING_TEXT, HASHTAG_DEF, HASHTAG_SIMILAR } from "../actions/hashtagActions";

const initialState = {
  hashtagDefinition: [],
  hashtagSimilar: [],
  isLoading: false
}

function hashtagReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_TEXT:
      return { ...state, isLoading: true };
    // Hashtag Definition
    case HASHTAG_DEF:
      return { ...state, isLoading: false, hashtagDefinition: action.payload };
    // Hashtag Definition
    case HASHTAG_SIMILAR:
      return { ...state, isLoading: false, hashtagSimilar: action.payload };

    // Default
    default:
      return state;
  }
}

export { hashtagReducer }
