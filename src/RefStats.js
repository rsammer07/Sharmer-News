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
                <Table.HeaderCell className="refCell">Referee</Table.HeaderCell>
                <Table.HeaderCell className="refCell">Games</Table.HeaderCell>
                <Table.HeaderCell className="refCell">Home Wins</Table.HeaderCell>
                <Table.HeaderCell className="refCell">Draws</Table.HeaderCell>
                <Table.HeaderCell className="refCell">Away Wins</Table.HeaderCell>
                <Table.HeaderCell className="refCell">Home Goals</Table.HeaderCell>
                <Table.HeaderCell className="refCell">Away Goals</Table.HeaderCell>
                <Table.HeaderCell className="refCell">Home Red Cards</Table.HeaderCell>
                <Table.HeaderCell className="refCell">Away Red Cards</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {refs.map((ref, index) => (
                <Table.Row key={index}>
                  <Table.Cell className="refCell">{ref.referee}</Table.Cell>
                  <Table.Cell className="refCell">{ref.games}</Table.Cell>
                  <Table.Cell className="refCell">{ref.homewin}</Table.Cell>
                  <Table.Cell className="refCell">{ref.draw}</Table.Cell>
                  <Table.Cell className="refCell">{ref.awaywin}</Table.Cell>
                  <Table.Cell className="refCell">{ref.homegoals}</Table.Cell>
                  <Table.Cell className="refCell">{ref.awaygoals}</Table.Cell>
                  <Table.Cell className="refCell">{ref.homeredcards}</Table.Cell>
                  <Table.Cell className="refCell">{ref.awayredcards}</Table.Cell>
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