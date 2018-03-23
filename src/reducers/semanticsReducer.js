import { ANALYZING_TEXT, SEMANTIC_ASSOC_LIST } from "../actions/semanticsActions";

const initialState = {
  associativeList: [],
  isLoading: false
}

function semanticsReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_TEXT:
      return { ...state, isLoading: true };
    // Associative List
    case SEMANTIC_ASSOC_LIST:
      return { ...state, isLoading: false, associativeList: action.payload };

    // Default
    default:
      return state;
  }
}

export { semanticsReducer }
