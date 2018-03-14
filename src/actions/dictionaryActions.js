// Dictionary Reducer Actions
export const defineLexeme = (searchTerm) => {
  return {
    type: 'DEFINE_LEXEME',
    payload: searchTerm
  }
}
