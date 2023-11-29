import React, { useEffect, useState } from "react";
import { Container, Table } from "semantic-ui-react";
import env from "react-dotenv";

function TopScorers() {
    const [ref, setRef] = useEffect([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table/scorers?how=head';
            const options = {
	            method: 'GET',
	            headers: {
		            'X-RapidAPI-Key': env.SPORTS_API_URL,
		            'X-RapidAPI-Host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
	            }
            };

     try {
        const response = await fetch(url, options);
        const result = await response.json();
        setRef(result.records);
      } catch (error) {
        console.error(error);
        // Optionally handle the error state, e.g., setTeams([]) or show an error message.
      }
    };

    fetchData();
  }, []);
}

export default TopScorers