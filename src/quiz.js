import React, { useState } from 'react'
import './quiz.css'
function Quiz() {
    const questions = [
        {
            questionText: 'Javascript is an _______ language?',
            answerOptions: [
                { answerText: 'Object-Based', isCorrect: false },
                { answerText: 'Procedural', isCorrect: false },
                { answerText: 'Object-Oriented', isCorrect: true },
                { answerText: 'None of the above', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following keywords is used to define a variable in Javascript?',
            answerOptions: [
                { answerText: 'var', isCorrect: false },
                { answerText: 'let', isCorrect: false },
                { answerText: 'Both var and let', isCorrect: true },
                { answerText: 'None of these', isCorrect: false },
            ],
        },
        {
            questionText: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
            answerOptions: [
                { answerText: 'Throws an error', isCorrect: false },
                { answerText: 'Ignores the statements', isCorrect: true },
                { answerText: 'Gives a warning', isCorrect: false },
                { answerText: 'None of the above', isCorrect: false },
            ],
        },
        {
            questionText: 'How can a datatype be declared to be a constant type?',
            answerOptions: [
                { answerText: 'const', isCorrect: true },
                { answerText: 'var', isCorrect: false },
                { answerText: 'let', isCorrect: false },
                { answerText: 'constant', isCorrect: false },
            ],
        },
    ]
    const [question, setQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [finalscore, setFinalscore] = useState(false)
    const changeQuestion = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const newquestion = question + 1;

        if (newquestion < questions.length) {
            setQuestion(newquestion);
        } else {
            // alert('You have finished the quiz')
            setFinalscore(true)
        }
    }

    return (
        <div className='quiz-card' >
            {finalscore ? (
                <div className="score">
                    <div className='final-score'>You scored {score} out of {questions.length}</div>
                </div>
            ) : (

                <div className="container">
                    <div className="card">
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {question + 1} of {questions.length}</span>
                            </div>
                            <div className="question">
                                <div className='question-text'>{questions[question].questionText}</div>
                            </div>
                        </div>
                        <div className='answer-section'>
                            {
                                questions[question].answerOptions.map((x) => {
                                    return <button onClick={()=>changeQuestion(x.isCorrect)}>{x.answerText}</button>
                                })
                            }

                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Quiz