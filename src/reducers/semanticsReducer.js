import {
  ANALYZING_SEMANTIC,
  SEMANTIC_ASSOC_LIST
} from '../actions/semanticsActions';

const initialState = {
  associativeList: [],
  isLoading: false
};

function semanticsReducer(state = initialState, action) {
  switch (action.type) {
    case ANALYZING_SEMANTIC:
      return { ...state, isLoading: true };
    case SEMANTIC_ASSOC_LIST:
      return { ...state, isLoading: false, associativeList: action.payload };
    default:
      return state;
  }
}

export { semanticsReducer };
