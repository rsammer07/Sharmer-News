import { useEffect, useState } from "react";
import { Container } from 'semantic-ui-react'
import League from "./League"
import Search from "./Search";
import env from "react-dotenv"



    function SportsStories() {

        const [leagues, setLeagues] = useState([]);
        const [searchResults, setSearchResults] = useState(null);
        
        useEffect(() => {
            if (leagues){
          const fetchData = async () => {
            const url = 'https://api-football-v1.p.rapidapi.com/v3/leagues';
            const options = {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': 'ee1459df65msh3c7adce9679a3b4p1f10a2jsn9d64263992ba',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
              }
            };
      
            try {
              const response = await fetch(url, options);
              const result = await response.json();
            //   console.log(result);
              setLeagues(result.response)
              // Handle the result as needed, set state, etc.
            } catch (error) {
              console.error(error);
              // Handle errors, show an error message, etc.
            }
          };
      
          fetchData();
        }
        }, []); // Empty dependency array ensures this effect runs only once on component mount
        console.log(leagues)

        const handleSearch = (query) => {
            setLeagues(query); // Set the search query to trigger useEffect
          };
    return (
        <div>
            <h1>The World of Football</h1>

            <Container>
                <Search 
                league = {leagues}
                handleSearch={handleSearch}
                 />
            </Container>

            <Container className="ui container leagueContainer" textAlign='center'>
            {leagues.length > 0 ? (
                leagues.map((league) => (
            <div key={league.league.id}>
                <img src={league.league.logo} alt={league.league.name} />
                <p>{league.league.name}</p>
            </div>
        ))
        ) : (
                <p>No leagues available</p>
        )}      
            </Container>
        </div>
        
    )
}

export default SportsStories