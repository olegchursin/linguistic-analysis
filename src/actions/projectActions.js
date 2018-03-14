// Project Reducer Actions
export const addProject = (project) => {
  return {
    type: 'ADD_PROJECT',
    payload: project
  }
}

export const addLexeme = (lexeme) => {
  return {
    type: 'ADD_LEXEME',
    payload: lexeme
  }
}

export const addText = (text) => {
  return {
    type: 'ADD_TEXT',
    payload: text
  }
}
