import React, { useEffect, useState } from 'react';
import PlayerTeams from '../PlayerTeams/PlayerTeams';

const Home = () => {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`)
      .then(response => response.json())
      .then(data => setTeams(data.teams))


  }, [])
  return (
    <div className="container mt-5">
      <div className="row">

        {
          teams.map((playerTeam) => <PlayerTeams playerTeam={playerTeam}></PlayerTeams>)
        }
      </div>

    </div>
  );
};

export default Home;