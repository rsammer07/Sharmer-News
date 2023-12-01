import React, { useEffect, useState } from "react";
import "./Sports.css";
import { Container, Table } from "semantic-ui-react";
import env from "react-dotenv";
import RefStats from "./RefStats";
import TodaysGames from "./NflScores";

function getRowColor(index, teams) {
  if (index < 4) {
    return "green";
  } else if (index === 4) {
    return "blue";
  } else if (index >= teams.length - 3) {
    return "red";
  } else {
    return "";
  }
}
let currentDate = new Date();
console.log(currentDate);

function SportsStories() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table";
      const options = {
        method: "GET",
        headers: {
          // "X-RapidAPI-Key": env.SPORTS_API_URL,
          "X-RapidAPI-Key":
            "ee1459df65msh3c7adce9679a3b4p1f10a2jsn9d64263992ba",
          "X-RapidAPI-Host":
            "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setTeams(result.records);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="SportsContainer">
        <div className="prem" id="PremTable">
          <h1>English Premier League</h1>
          <Container className="ui container teamContainer" textAlign="center">
            {teams && teams.length > 0 ? (
              <div>
                <Table celled className="premTable">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Team</Table.HeaderCell>
                      <Table.HeaderCell>Played</Table.HeaderCell>
                      <Table.HeaderCell>Win</Table.HeaderCell>
                      <Table.HeaderCell>Draw</Table.HeaderCell>
                      <Table.HeaderCell>Loss</Table.HeaderCell>
                      <Table.HeaderCell>Goals For</Table.HeaderCell>
                      <Table.HeaderCell>Goals Against</Table.HeaderCell>
                      <Table.HeaderCell>Points</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {teams.map((team, index) => (
                      <Table.Row
                        key={team.team}
                        style={{ background: getRowColor(index, teams) }}
                      >
                        <Table.Cell>{team.team}</Table.Cell>
                        <Table.Cell>{team.played}</Table.Cell>
                        <Table.Cell>{team.win}</Table.Cell>
                        <Table.Cell>{team.draw}</Table.Cell>
                        <Table.Cell>{team.loss}</Table.Cell>
                        <Table.Cell>{team.goalsFor}</Table.Cell>
                        <Table.Cell>{team.goalsAgainst}</Table.Cell>
                        <Table.Cell>{team.points}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>

                <div className="values">
                  <p style={{ color: "green" }}>
                    Champions League Qualification
                  </p>
                  <p style={{ color: "blue" }}>Europa League Qualification</p>
                  <p style={{ color: "red" }}>Relegation</p>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </Container>
        </div>

        <div className="fotmob">
          <h2>Want more in depth stats, transfer news and injury reports?</h2>
          <a href="https://www.fotmob.com/leagues/47/news/premier-league">
            <h3>Click Here!</h3>
          </a>
        </div>

        <div className="ref" id="refContainer">
          <RefStats />
        </div>

        <div className="nfl" id="NflRight">
          <TodaysGames />
        </div>
      </div>
    </div>
  );
}

export default SportsStories;
