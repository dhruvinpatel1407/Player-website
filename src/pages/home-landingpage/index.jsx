import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPlayerData } from "../../actions";
import Form from "../../components/form";
import { Link } from "react-router-dom";
import ErrorBoundry from "../../components/error boundry";
import BuggyComponent from "../../components/Buggy Compo";
import Table from "../../components/table";
function Home() {
  const PlayerBenchData = useSelector((state) => state.Bench || []);
  console.log(PlayerBenchData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPlayerData());
  }, [dispatch]);

  const PlayerBenchList = PlayerBenchData.length ? (
    <>
      <Table PlayerData={PlayerBenchData} />
    </>
  ) : (
    <>
      <p>No Data Yet</p>
    </>
  );
  const [isFormVisible, setFormVisible] = useState(false);
  const handleClick = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <div>
      <h1 className="text-center border border-2 border-black bg-blue-300 p-2 m-4 ">Bench Table</h1> {PlayerBenchList}
      {/* Add Score Button */}
     <div className="text-center">
      <Link
        to="/"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md m-4"
        onClick={handleClick}
      >
        Add Player Score
      </Link> 
      <div>{isFormVisible && <Form />}</div> </div>
      {/* 
      <ErrorBoundry>
        <BuggyComponent />
      </ErrorBoundry>
       */}
    </div>
  );
}

export default Home;
