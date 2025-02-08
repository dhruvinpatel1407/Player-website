import * as actions from "./actiontypes";
import axios from "axios";

export const GetPlayerData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        
      );
      console.log(response.data.players);

      dispatch({
        type: actions.GET_PLAYER,
        payload: {
          playingXI: response.data.players["playing XI"],
          bench: response.data.players["bench"],
        },
      });
    } catch (error) {
      console.error("Error fetching player data:", error);
      // Optionally dispatch an error action
      dispatch({
        type: actions.GET_PLAYER_ERROR,
        payload: {
          error: error.message,
        },
      });
    }
  };
};

export const GetAddedData = (data) => {
  return { type: actions.ADD_PLAYER, payload: data };
};

export const DeleteUser = (index) => {
  return {type: actions.DELETE_PLAYER, payload: index}
}

export const onInc = () => {
  return { type: actions.INC, payload: 1 };
};

export const onDec = () => {
  return { type: actions.DEC, payload: 1 };
};