import * as actions from "./actiontypes";
import axios from "axios";

export const GetPlayerData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
           "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/35878/team/9",
        {
          headers: {
            "x-rapidapi-key":
              "e021f5f300msh8550ffb45be89dbp1ce8c2jsn1f3fe33af0b9",
            "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
          },
        }
      );
      // console.log(response.data.players);

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
  return { type: actions.DELETE_PLAYER, payload: index };
};


export const saveContactResponse = (formData) => {
  return {
    type: actions.SAVE_CONTACT_RESPONSE,
    payload: formData,
  };
};