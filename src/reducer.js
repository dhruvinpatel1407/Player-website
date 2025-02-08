import * as actions from "./actiontypes";

export const initState = {
  PlayerData: [],
  Bench : [],
  AddData : [],
  
  
};


console.log(initState);



const reducer = (state = initState,action) => {
  switch(action.type) {
    case actions.GET_PLAYER:
      return { ...state, PlayerData : action.payload.playingXI , Bench : action.payload.bench };
    case actions.ADD_PLAYER:
      const newUser = {...action.payload}
      return {...state, AddData : [...state.AddData, newUser]} 
    case actions.DELETE_PLAYER : 
    return {...state, AddData: state.AddData.filter((_, i) => i !== action.payload),}
    default:
      return state;
  }
};

export default reducer;
