import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionsPage from './pages/QuestionsPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<QuestionsPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
