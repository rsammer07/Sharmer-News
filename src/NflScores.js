import React, { useEffect, useState } from "react";
import { Container, Table } from "semantic-ui-react";
import env from "react-dotenv";


function TodaysGames() {
  const [games, setGames] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url =
  //       "https://sportspage-feeds.p.rapidapi.com/games?league=NFL&date=2023-11-27";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": env.SPORTS_API_URL,
  //         "X-RapidAPI-Host": "sportspage-feeds.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result)
  //       setGames(result.records);
  //       console.log(games)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);








  return (
    <div>
      <h4>Todays NFL games</h4>
      <Container className="ui container NFLContainer" textAlign="center">
        {games && games.length > 0 ? (
          <Table celled>
            <Table.Body>
              {games.map((game, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{game.away.team}</Table.Cell>
                  <Table.Cell>{game.away.score}</Table.Cell>
                  <Table.Cell>{game.home.team}</Table.Cell>
                  <Table.Cell>{game.home.score}</Table.Cell>
                  <Table.Cell>{game.status}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <p>No NFL games today</p>
        )}
      </Container>
    </div>
  );
}

export default TodaysGames;