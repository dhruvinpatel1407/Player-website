import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPlayerData } from "../../actions";
import Table from "../../components/table";
function PopularPlayer() {
  const { PlayerData } = useSelector((state) => ({
    PlayerData: state.PlayerData || [],
  }));
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPlayerData());
  }, [dispatch]);

  
  return <div className="m-4">
  <h1 className="text-center border border-2 border-black bg-blue-300 p-2 m-4 ">Player Table</h1>
  <Table PlayerData={PlayerData}/></div>;
}

export default PopularPlayer;
