import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getQuestions } from '../utils/localstorage';
import './QuestionsPage.css';

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [showAnswers, setShowAnswers] = useState([]); //answer katturathu

  useEffect(() => {
    const data = getQuestions();
    setQuestions(data);
    setShowAnswers(new Array(data.length).fill(false));
  }, []);

  const toggleAnswer = (index) => {
    const updated = [...showAnswers];
    updated[index] = !updated[index];
    setShowAnswers(updated);
  };

  return (
    <div className="page">
      <h1>All Questions</h1>
      {questions.length === 0 ? (
        <p>No questions found. <Link to="/create">Add one now</Link>.</p>
      ) : (
        <div className="question-list">
          {questions.map((q, index) => (
            <div key={index} className="question-card">
              <h3>{q.question}</h3>
              <ul>
                {q.choices.map((choice, i) => (
                  <li key={i}>{i+1}) {choice}</li>
                ))}
              </ul>


              <button
                onClick={() => toggleAnswer(index)}
                className="show-btn"
              >
                {showAnswers[index] ? 'Hide Answer' : 'Show Answer'}
              </button>

              
              {showAnswers[index] && (
                <p className="answer"> Correct Answer: {q.correct}</p>
              )}

              <Link to={`/edit/${index}`} className="edit-btn">Edit</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionsPage;
