<<<<<<< HEAD
import { ANALYZING_TEXT, HASHTAG_DEF } from "../actions/hashtagActions";

const initialState = {
  hashtagDefinition: [],
=======
import { ANALYZING_TEXT, HASHTAG_DEF, HASHTAG_SIMILAR } from "../actions/hashtagActions";

const initialState = {
  hashtagDefinition: [],
  hashtagSimilar: [],
>>>>>>> hashtag-analytics
  isLoading: false
}

function hashtagReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_TEXT:
      return { ...state, isLoading: true };
    // Hashtag Definition
    case HASHTAG_DEF:
      return { ...state, isLoading: false, hashtagDefinition: action.payload };
<<<<<<< HEAD
=======
    // Hashtag Definition
    case HASHTAG_SIMILAR:
      return { ...state, isLoading: false, hashtagSimilar: action.payload };
>>>>>>> hashtag-analytics

    // Default
    default:
      return state;
  }
}

export { hashtagReducer }
