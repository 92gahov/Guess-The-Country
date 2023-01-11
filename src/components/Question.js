import React from 'react';

const Question = ({ answers,
    getNewQuestion,
    choice,
    givenAnswer,
    userAnswer,
    rightAnswer,
    correctAnswer }) => {

    return (
        <>
            <section className='question-main'>
                <div className='question'>
                    <div className='question-text'>
                        <h2>Which country is this?</h2>
                    </div>
                </div>
                <div className='answers'>
                    {
                        answers.map((answer, index) => {
                            return (
                                <div className='answer' key={index}>
                                    <button onClick={choice} data-country={answer.name}>{answer.name}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {
                givenAnswer && <div className='user-answer-main'>
                    <div className='user-answer'>
                        <h2 className={rightAnswer ? "right-answer" : "wrong-answer"}>{userAnswer}</h2>
                        <h2 className='right-answer'>{correctAnswer.name}</h2>
                        <div className='next-question'>
                            <button onClick={getNewQuestion}>NEXT</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default Question;