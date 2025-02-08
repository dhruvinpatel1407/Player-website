import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAddedData } from "../../actions";
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [teamname, setTeamName] = useState("");
  const [id, setId] = useState("");
  const AddData = useSelector((state) => state.AddData);
  const dispatch = useDispatch();

  const handlechange = (e) => {
if (e.target.name === "playerName") {
      setName(e.target.value);
      setId(uuidv4().slice(0,5))
    } else if (e.target.name === "teamName") {
      setTeamName(e.target.value);
    } else if (e.target.name === "position") {
      setPosition(e.target.value);
    }

    
  };

  //console.log(name, position, teamname);

  const handlesubmit = (e) => {
    e.preventDefault();
    const data = { name, position, teamname, id };
    setName("");
    setPosition("");
    setTeamName("");
    setId("");
    dispatch(GetAddedData(data));
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="playerName">Player Name:</label>
          <input
            type="text"
            id="playerName"
            name="playerName"
            className="border border-black m-2"
            onChange={handlechange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="teamName">Team Name:</label>
          <input
            type="text"
            id="teamName"
            name="teamName"
            className="border border-black m-2"
            onChange={handlechange}
          value={teamname}
          />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            className="border border-black m-2"
            onChange={handlechange}
            value={position}
          />
        </div>
        <button type="submit" className="border border-black m-2 p-2 bg-blue-400">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
