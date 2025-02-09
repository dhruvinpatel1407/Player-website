import * as actions from "./actiontypes";

export const initState = {
  PlayerData: [],
  Bench : [],
  AddData : [],
  contactResponse: [],
  
};


const reducer = (state = initState,action) => {
  switch(action.type) {
    case actions.GET_PLAYER:
      return { ...state, PlayerData : action.payload.playingXI , Bench : action.payload.bench };
    case actions.ADD_PLAYER:{
      const newUser = {...action.payload}
      return {...state, AddData : [...state.AddData, newUser]} }
    case actions.DELETE_PLAYER : 
    return {...state, AddData: state.AddData.filter((_, i) => i !== action.payload),}
    case actions.SAVE_CONTACT_RESPONSE:
      return {
        ...state,
        contactResponses: [...state.contactResponse, action.payload], // Store multiple responses
      };
    default:
      return state;
  }
};

export default reducer;
