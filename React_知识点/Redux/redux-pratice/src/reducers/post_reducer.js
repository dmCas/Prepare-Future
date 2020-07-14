
const postReducer = (state = {name:'jj'} , action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return {
        ...state,
        name: action.payload
      }
    default: 
      return state
  }

}

export default postReducer