import React, { useState } from 'react';

const Table = ({PlayerData}) => {
  console.log(PlayerData);
  // const [data,setData] = useState(null);
  // setData(PlayerData);
  // console.log(data);
  return (
    <div>
      
      <table className='text-center ms-20'>
        <thead>
          <tr className='border border-1 border-black bg-blue-300'>
            <th className="border border-gray-300 px-4 py-2 ">ID</th>
            <th className="border border-gray-300 px-4 py-2 ">Name</th>
            <th className="border border-gray-300 px-4 py-2 ">Role</th>
            <th className="border border-gray-300 px-4 py-2 ">Team Name</th>
            <th className="border border-gray-300 px-4 py-2 ">Batting Style</th>
            <th className="border border-gray-300 px-4 py-2 ">Bowling style</th>
          </tr>
        </thead>
        <tbody>
          {PlayerData.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-8 py-2">{item.id}</td>
              <td className="border border-gray-300 px-8 py-2">{item.name}</td>
              <td className="border border-gray-300 px-8 py-2">{item.role}</td>
              <td className="border border-gray-300 px-8 py-2">{item.teamName}</td>
              <td className="border border-gray-300 px-8 py-2">{item.battingStyle}</td>
              <td className="border border-gray-300 px-8 py-2">{item.bowlingStyle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
