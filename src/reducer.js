export const  initialState={
  user:"ejefv"
}
  const reducer=(state,action)=>{
    switch(action.type)
    {
        case "SET_USERS":
        {
                  
            return {
                  ...state,
                  user:action.user,
            }
        }
          default: return state; 
    }
}

export default reducer;