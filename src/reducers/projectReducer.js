// import { ADD_PROJECT, ADD_LEXEME, ADD_TEXT } from "../actions/projectActions";

const initialState = {
  projects: [],
  lexemes: [],
  texts: [],
  currentProject: null
}

const projectReducer = (state = initialState, action) => {
  switch(action.type){
    // case 'ADD_PROJECT':
    //   return {
    //     projects: [...state.projects, action.payload]
    //   }
    // case 'ADD_LEXEME':
    //   return {
    //     lexemes: [...state.lexemes, action.payload]
    //   }
    // case 'ADD_TEXT':
    //   return {
    //     texts: [...state.texts, action.payload]
    //   }
    default:
      return state
  }
}

export { projectReducer }
