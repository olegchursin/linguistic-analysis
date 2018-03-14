const initialState = {
  projects: [],
  lexemes: [],
  texts: [],
  auth: {
      loggedIn: false,
    }
}

const root = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_PROJECT':
      return {
        projects: [...state.projects, action.payload]
      }
    case 'ADD_LEXEME':
      return {
        lexemes: [...state.projects, action.payload]
      }
    case 'ADD_TEXT':
      return {
        texts: [...state.projects, action.payload]
      }
    default:
      return state
  }
}

export { root }
