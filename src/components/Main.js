import React, { useEffect, useState } from 'react';
import countries from '../data/Countries';
import Flag from './Flag';
import Jokers from './Jokers';
import Question from './Question';
import soundRight from '../sounds/right.mp3';
import soundWrong from '../sounds/wrong.wav';

const Main = () => {

    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState({});
    const [joker, setJoker] = useState("Jokers");
    const [givenAnswer, setGivenAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [rightAnswer, setRightAnswer] = useState(false);
    const rightAnswerSound = new Audio(soundRight);
    const wrongAnswerSound = new Audio(soundWrong);

    const newQuestion = () => {
        const min = 0;
        const max = countries.length;
        let arr = [];
        let answers = [];
        for (let i = 0; i < 4; i++) {
            let answer = Math.floor(Math.random() * max) + min;
            let isInArray = arr.includes(answer);
            if (isInArray === false) {
                arr.push(answer);
                answers.push(countries[answer]);
            } else {
                while (isInArray === true) {
                    answer = Math.floor(Math.random() * max) + min;
                    isInArray = arr.includes(answer);
                    if (isInArray === false) {
                        arr.push(answer);
                        answers.push(countries[answer]);
                    }
                }
            }
        }
        setAnswers(answers);
        const correctAnswer = Math.floor(Math.random() * answers.length);
        setCorrectAnswer(answers[correctAnswer]);
        setJoker("Jokers");
        setGivenAnswer(false);
    };

    const regionJoker = () => {
        setJoker(correctAnswer.region);
    };

    const subregionJoker = () => {
        setJoker(correctAnswer.subregion);
    };

    const getNewQuestion = () => {
        newQuestion();
    };

    const fiftyFifty = () => {
        let fiftyFiftyArr = [];
        const newAnswers = answers.filter(item => item !== correctAnswer);
        const newAnswer = Math.floor(Math.random() * newAnswers.length);
        fiftyFiftyArr.push(correctAnswer);
        fiftyFiftyArr.push(newAnswers[newAnswer]);
        let fiftyFiftyResult = fiftyFiftyArr
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        setAnswers(fiftyFiftyResult);
    };

    const choice = (e) => {
        const choice = e.target.dataset.country;
        setUserAnswer(choice);
        if (choice === correctAnswer.name) {
            setTimeout(() => {
                setRightAnswer(true);
                setGivenAnswer(true);
                rightAnswerSound.play();
            }, 400);
        } else {
            setTimeout(() => {
                setRightAnswer(false);
                setGivenAnswer(true);
                wrongAnswerSound.play();
            }, 400);
        }
    };

    useEffect(() => {
        newQuestion();
    }, []);

    return (
        <>
            <Flag correctAnswer={correctAnswer} />
            <Jokers correctAnswer={correctAnswer}
                joker={joker}
                regionJoker={regionJoker}
                subregionJoker={subregionJoker}
                fiftyFifty={fiftyFifty} />
            <Question answers={answers}
                getNewQuestion={getNewQuestion}
                choice={choice}
                givenAnswer={givenAnswer}
                userAnswer={userAnswer}
                rightAnswer={rightAnswer}
                correctAnswer={correctAnswer} />
        </>
    )
};

export default Main;