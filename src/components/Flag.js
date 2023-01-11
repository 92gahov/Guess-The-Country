import React from 'react';

const Flag = ({ correctAnswer }) => {
    return (
        <section className='flag-main'>
            <div className='flag'>
                <img src={correctAnswer.flag} alt={correctAnswer.name}></img>
            </div>
        </section>
    )
};

export default Flag;