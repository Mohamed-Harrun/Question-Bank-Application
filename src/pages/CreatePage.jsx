import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuestions, saveQuestions } from '../utils/localstorage';
import QuestionForm from '../components/QuestionForm';

const CreatePage = () => {
  const navigate = useNavigate();

  const handleCreate = (newQuestion) => {
    const questions = getQuestions();
    questions.push(newQuestion);
    saveQuestions(questions);
    navigate('/');
  };

  return (
    <div>
      <h1>Create New Question</h1>
      <QuestionForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePage;
