import React from 'react';

const Jokers = ({ joker,
    regionJoker,
    subregionJoker,
    fiftyFifty }) => {
    return (
        <section className='jokers-main'>
            <div className='jokers'>
                <h2>{joker}</h2>
                <button onClick={regionJoker}>Region</button>
                <button onClick={subregionJoker}>Subregion</button>
                <button onClick={fiftyFifty}>50/50</button>
            </div>
        </section>
    )
};

export default Jokers;