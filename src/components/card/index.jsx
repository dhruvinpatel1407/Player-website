const Card = ({ id, name, position, teamName }) => {
    return (
        <div className="bg-white border rounded-lg shadow-md p-4 w-72 mx-auto mb-4 relative">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">
          <span className="font-medium">ID:</span> {id}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Position:</span> {position}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Team Name:</span> {teamName}
        </p>
        <button
          onClick={() => onDelete(id)}
          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>
    );
  };

  export default Card;