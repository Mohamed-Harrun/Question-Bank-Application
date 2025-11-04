import React, { useState, useEffect } from 'react';
import './QuestionForm.css';

const QuestionForm = ({ onSubmit, initialData }) => {
  const [question, setQuestion] = useState(initialData?.question || '');
  const [choices, setChoices] = useState(initialData?.choices || ['', '', '']);
  const [correct, setCorrect] = useState(initialData?.correct || '');

  useEffect(() => {
    if (initialData) {
      setQuestion(initialData.question);
      setChoices(initialData.choices);
      setCorrect(initialData.correct);
    }
  }, [initialData]);

  const handleChoiceChange = (index, value) => {
    const updated = [...choices];
    updated[index] = value;
    setChoices(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || choices.some(c => !c) || !correct) {
      alert('Please fill all fields');
      return;
    }
    onSubmit({ question, choices, correct });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Question:</label>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question"
      />

      {choices.map((choice, index) => (
        <div key={index}>
          <label>Choice {index + 1}:</label>
          <input
            type="text"
            value={choice}
            onChange={(e) => handleChoiceChange(index, e.target.value)}
            placeholder={`Enter choice ${index + 1}`}
          />
        </div>
      ))}

      <label>Correct Answer:</label>
      <select value={correct} onChange={(e) => setCorrect(e.target.value)}>
        <option value="">Select correct choice</option>
        {choices.map((c, i) => (
          <option key={i} value={c}>{c || `Choice ${i + 1}`}</option>
        ))}
      </select>

      <button type="submit" className="btn-primary">Save Question</button>
    </form>
  );
};

export default QuestionForm;
