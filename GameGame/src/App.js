import './App.css';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';

import GameCard from './GameCard';

const App = () => {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchGames = async (Name) => {
        const response = await fetch(`https://my-json-server.typicode.com/khitty/gamegamedb/games?_limit=12&Name_like=^${Name}`)
            .then(response => response.json())
            .then(data => setGames(data));
    }

    const dynamicSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        searchGames(searchTerm);
    }

    useEffect(() => {
        searchGames('');
    }, []);



    return (
        <div className="app">

            <h1>Game Game</h1>

            <div className="search">

                <input
                    placeholder="Search for games"
                    value={searchTerm}
                    onChange={(e) => dynamicSearch(e.target.value)}
                />

                {/*<img*/}
                {/*    src={SearchIcon}*/}
                {/*    alt="search"*/}
                {/*    onClick={() => searchGames(searchTerm)}*/}
                {/*/>*/}

            </div>

            {games?.length > 0
                ? (
                    <div className="container">
                        {games.map((game) => (
                            <GameCard game={game}/>
                            ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No games found</h2>
                    </div>
                )
            }



        </div>       
    );


}

export default App;
