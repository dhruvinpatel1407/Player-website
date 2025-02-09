import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser } from "../../redux/actions";

function PlayerScore() {
  const AddData = useSelector((state) => state.AddData);
  // console.log(AddData);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(DeleteUser(index));
  };

  if (!AddData || AddData.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
        <h2 className="text-3xl font-bold text-gray-800">
          No Players Added Yet! ⚽
        </h2>
        <p className="text-gray-600 mt-2">
          Start adding players to see them here.
        </p>
      </div>
    );
  }

  const list = AddData.map((user, index) => {
    return (
      <>
        <div
          key={user.id}
          className="bg-white border rounded-lg p-4 w-72 mx-auto my-4 relative"
        >
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">
            <span className="font-medium">ID:</span> {user.id}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Score:</span> {user.score}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </button>
        </div>
      </>
    );
  });

  return (
    <div className="min-h-screen">
      <div className="flex flex-row flex-wrap">{list}</div>
    </div>
  );
}

export default PlayerScore;
