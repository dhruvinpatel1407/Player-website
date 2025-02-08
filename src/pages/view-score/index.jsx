import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser } from "../../actions";

function PlayerScore() {
  const AddData = useSelector((state) => state.AddData);
  console.log(AddData);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(DeleteUser(index));
  };

  if (!AddData || AddData.length === 0) {
    return <p>No players added yet.</p>;
  }

  const list = AddData.map((user, index) => {
    return (
      <>
        <div className="bg-white border rounded-lg shadow-md p-4 w-72 mx-auto mb-4 relative">
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">
            <span className="font-medium">ID:</span> {user.id}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Position:</span> {user.position}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Team Name:</span> {user.teamname}
          </p>
          <button
            onClick={() => handleDelete(index)}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded"
          >
            Delete
          </button>
        </div>
      </>
    );
  });
  
  return (
    <div>
      <div className="border border-2 flex flex-row flex-wrap">{list}</div>
    </div>
  );
}

export default PlayerScore;
