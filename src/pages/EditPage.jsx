import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getQuestions, saveQuestions } from '../utils/localstorage';
import QuestionForm from '../components/QuestionForm';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questions = getQuestions();
  const existingQuestion = questions[id];

  const handleUpdate = (updatedQuestion) => {
    questions[id] = updatedQuestion;
    saveQuestions(questions);
    navigate('/');
  };

  if (!existingQuestion) return <p>Question not found</p>;

  return (
    <div>
      <h1>Edit Question</h1>
      <QuestionForm onSubmit={handleUpdate} initialData={existingQuestion} />
    </div>
  );
};

export default EditPage;
