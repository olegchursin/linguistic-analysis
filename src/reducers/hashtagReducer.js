import { ANALYZING_TEXT, HASHTAG_DEF } from "../actions/hashtagActions";

const initialState = {
  hashtagDefinition: [],
  isLoading: false
}

function hashtagReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_TEXT:
      return { ...state, isLoading: true };
    // Hashtag Definition
    case HASHTAG_DEF:
      return { ...state, isLoading: false, hashtagDefinition: action.payload };

    // Default
    default:
      return state;
  }
}

export { hashtagReducer }
