/*No different from .js file. Just changes file img and seems to be standard for components*/

import React from 'react';

/*
 * Instead of just going GameCard = (props) and having to do props.something later
 * We can instead use {} to use object structuring, passing the object itself
 */
const GameCard = ({game}) => {

    return(
        <div className = "movie" >
            <div>                
                <h4>Released: {new Date(game.ReleaseDate).getFullYear()}</h4>
            </div>

            <div>
                <img
                    src={game.HeaderImage != '' ? game.HeaderImage : 'https://via.placeholder.com/400'}
                    alt={game.Name}
                />
            </div>

            {/*will replace with genre or something. this is temp*/ }
            <div>
                <h4>{game.Name}</h4>
                <span>${game.InitialPrice}</span>
            </div >
        </div>
    )
}

export default GameCard;