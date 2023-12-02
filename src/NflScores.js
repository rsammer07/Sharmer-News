import React, { useEffect, useState } from "react";
import { Container, Table } from "semantic-ui-react";
import env from "react-dotenv";
import "./NflScores.css"

const thursdayNightArray = [
      {
          "summary": "Seattle Seahawks @ Dallas Cowboys",
          "details": {
              "league": "NFL",
              "seasonType": "regular",
              "season": 2023,
              "conferenceGame": true,
              "divisionGame": false
          },
          "schedule": {
              "date": "2023-12-01T01:15:00.000Z",
              "tbaTime": false
          },
          "status": "final",
          "teams": {
              "away": {
                  "team": "Seattle Seahawks",
                  "location": "Seattle",
                  "mascot": "Seahawks",
                  "abbreviation": "SEA",
                  "conference": "NFC",
                  "division": "West"
              },
              "home": {
                  "team": "Dallas Cowboys",
                  "location": "Dallas",
                  "mascot": "Cowboys",
                  "abbreviation": "DAL",
                  "conference": "NFC",
                  "division": "East"
              }
          },
          "lastUpdated": "2023-12-01T04:43:07.649Z",
          "gameId": 298327,
          "venue": {
              "name": "AT&T Stadium",
              "neutralSite": false,
              "city": "Arlington",
              "state": "TX"
          },
          "odds": [
              {
                  "spread": {
                      "open": {
                          "away": 7.5,
                          "home": -7.5,
                          "awayOdds": -110,
                          "homeOdds": -110
                      },
                      "current": {
                          "away": 9.5,
                          "home": -9.5,
                          "awayOdds": -110,
                          "homeOdds": -115
                      }
                  },
                  "moneyline": {
                      "open": {
                          "awayOdds": 288,
                          "homeOdds": -368
                      },
                      "current": {
                          "awayOdds": 362,
                          "homeOdds": -487
                      }
                  },
                  "total": {
                      "open": {
                          "total": 46.5,
                          "overOdds": -110,
                          "underOdds": -110
                      },
                      "current": {
                          "total": 47.5,
                          "overOdds": -110,
                          "underOdds": -110
                      }
                  },
                  "openDate": "2023-11-27T08:03:28.724Z",
                  "lastUpdated": "2023-12-01T01:34:56.087Z"
              }
          ],
          "scoreboard": {
              "score": {
                  "away": 35,
                  "home": 41,
                  "awayPeriods": [
                      7,
                      14,
                      7,
                      7
                  ],
                  "homePeriods": [
                      10,
                      10,
                      7,
                      14
                  ]
              },
              "currentPeriod": 4,
              "periodTimeRemaining": "0:00"
          }
      }
  ]


function TodaysGames() {
  const [games, setGames] = useState([]);

  const dateObj = new Date();
  let month = dateObj.getMonth() + 1;
  let day = dateObj.getDate();
  let year = dateObj.getFullYear();
  const currentDate = year + "-" + month + "-" + day;



  useEffect(() => {
    
    const fetchData = async () => {
      const url =
        "https://sportspage-feeds.p.rapidapi.com/games?league=NFL&date=" + currentDate;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "ee1459df65msh3c7adce9679a3b4p1f10a2jsn9d64263992ba",
          "X-RapidAPI-Host": "sportspage-feeds.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.results.length > 0){
        setGames(result.results);
        } else {
          setGames(thursdayNightArray)
        }

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // setGames(thursdayNightArray)
  }, []);








  return (
    <div>
      <h4>Todays NFL games</h4>
      <div className="NflScores">
      <Container className="ui container NFLContainer" textAlign="center">
        {games && games.length > 0 ? (
          <Table celled className="nflTable">
            <Table.Header>
              {games.map((game, index) => (
                <Table.Row key={index}>
                  <Table.Cell className="awayTeam">{game.teams.away.team}</Table.Cell>
                  <Table.Cell className="homeTeam">{game.teams.home.team}</Table.Cell>
                  <Table.Cell className="status">Status</Table.Cell>
                  </Table.Row>
              ))}
            
            </Table.Header>
            <Table.Body>
              {games.map((game, index) => (
                <Table.Row key={index}>
                  {/* <Table.Cell className="awayTeam">{game.teams.away.team}</Table.Cell> */}
                  <Table.Cell className="awayScore">{game.scoreboard.score.away}</Table.Cell>
                  {/* <Table.Cell className="homeTeam">{game.teams.home.team}</Table.Cell> */}
                  <Table.Cell className="homeScore">{game.scoreboard.score.home}</Table.Cell>
                  <Table.Cell className="status">{game.status}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <p>No NFL games today</p>
        )}
      </Container>
      </div>
    </div>
  );
}

export default TodaysGames;