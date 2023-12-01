import React, { useEffect, useState } from "react";
import { Container, Table } from "semantic-ui-react";
import env from "react-dotenv";

function RefStats() {
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table/referee";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "ee1459df65msh3c7adce9679a3b4p1f10a2jsn9d64263992ba",
          "X-RapidAPI-Host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        setRefs(result.referees);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1>Referee Stats for the 23-24 Season</h1>
      <Container className="ui container refereeContainer" textAlign="center">
        {refs && refs.length > 0 ? (
          <Table celled  className="refStats">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Referee</Table.HeaderCell>
                <Table.HeaderCell>Games</Table.HeaderCell>
                <Table.HeaderCell>Home Wins</Table.HeaderCell>
                <Table.HeaderCell>Draws</Table.HeaderCell>
                <Table.HeaderCell>Away Wins</Table.HeaderCell>
                <Table.HeaderCell>Home Goals</Table.HeaderCell>
                <Table.HeaderCell>Away Goals</Table.HeaderCell>
                <Table.HeaderCell>Home Red Cards</Table.HeaderCell>
                <Table.HeaderCell>Away Red Cards</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {refs.map((ref, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{ref.referee}</Table.Cell>
                  <Table.Cell>{ref.games}</Table.Cell>
                  <Table.Cell>{ref.homewin}</Table.Cell>
                  <Table.Cell>{ref.draw}</Table.Cell>
                  <Table.Cell>{ref.awaywin}</Table.Cell>
                  <Table.Cell>{ref.homegoals}</Table.Cell>
                  <Table.Cell>{ref.awaygoals}</Table.Cell>
                  <Table.Cell>{ref.homeredcards}</Table.Cell>
                  <Table.Cell>{ref.awayredcards}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </div>
  );
}

export default RefStats;