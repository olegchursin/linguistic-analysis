import SemanticsApi from '../services/semanticsApi';

export const ANALYZING_SEMANTIC = 'ANALYZING_SEMANTIC';

export const SEMANTIC_ASSOC_LIST = 'SEMANTIC_ASSOC_LIST';

export function associativeList(inputText) {
  return function (dispatch) {
    dispatch({ type: ANALYZING_SEMANTIC });
    SemanticsApi.associativeList(inputText).then(res => {
      dispatch({ type: SEMANTIC_ASSOC_LIST, payload: res.response[0].items });
    });
  };
}
