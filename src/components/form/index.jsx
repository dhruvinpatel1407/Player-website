import  { useState } from "react";
import { useDispatch } from "react-redux";
import { GetAddedData } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [teamname, setTeamName] = useState("");
  const [id, setId] = useState("");
  const [score , setScore] = useState("")
  
  const dispatch = useDispatch();

  const handlechange = (e) => {
    if (e.target.name === "playerName") {
      setName(e.target.value);
      setId(uuidv4().slice(0, 5));
    } else if (e.target.name === "teamName") {
      setTeamName(e.target.value);
    } else if (e.target.name === "position") {
      setPosition(e.target.value);
    } else if(e.target.name === "score"){
      setScore(e.target.value);
    }
  };

  //console.log(name, position, teamname);

  const handlesubmit = (e) => {
    e.preventDefault();
    const data = { name, score, position, teamname, id };
    setName("");
    setPosition("");
    setTeamName("");
    setId("");
    setScore("");
    dispatch(GetAddedData(data));
  };

  return (
    <>
     <form
  onSubmit={handlesubmit}
  className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto space-y-4"
>
  <h2 className="text-2xl font-bold text-center text-gray-900">
    Add Player Details
  </h2>

  <div>
    <input
      type="text"
      id="playerName"
      name="playerName"
      placeholder="Player Name"
      className="w-full p-3 border border-gray-400 rounded-lg mt-1 placeholder-gray-500"
      onChange={handlechange}
      value={name}
      required
    />
  </div>

  <div>
    <input
      type="text"
      id="score"
      name="score"
      placeholder="Score"
      className="w-full p-3 border border-gray-400 rounded-lg mt-1 placeholder-gray-500"
      onChange={handlechange}
      value={score}
      required
    />
  </div>

  <div>
    <input
      type="text"
      id="teamName"
      name="teamName"
      placeholder="Team Name"
      className="w-full p-3 border border-gray-400 rounded-lg mt-1 placeholder-gray-500"
      onChange={handlechange}
      value={teamname}
      required
    />
  </div>

  <div>
    <input
      type="text"
      id="position"
      name="position"
      placeholder="Position"
      className="w-full p-3 border border-gray-400 rounded-lg mt-1 placeholder-gray-500"
      onChange={handlechange}
      value={position}
      required
    />
  </div>

  <button
    type="submit"
    className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900"
  >
    Submit
  </button>
</form>

    </>
  );
}

export default Form;
