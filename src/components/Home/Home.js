import React from 'react';
import "./Home.css";

function Home({ setPageNum }) {

    const handleClick = () => {
        setPageNum(1)
    }

    return (
        <div className="home">
            <div className="home__centerElement">
                <p>Pritisnite gumb niže kako biste pokrenuli konfigurator</p>
                <button onClick={handleClick}>Pokreni konfigurator</button>
            </div>
        </div >
    )
}

export default Home;
