# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"# Question-Bank-Application" 

# 🧠 Question Bank Application

A simple **React.js Question Bank App** that allows users to **create**, **edit**, **view**, and **manage multiple-choice questions**, all stored locally in the browser using **Local Storage**.

---

## 🚀 Project Overview
This project is a three-page React application built using **functional components** and **React Hooks**.  
It’s designed to help users practice CRUD operations, routing, and state management in React.

---

## 📄 Features

✅ **Questions Page**
- Displays a list of all stored questions.  
- Each question card has:
  - “Show Answer” button  
  - “Edit” button  
  - “Delete” button  
- “Add Question” button navigates to the Create page.

✅ **Create Question Page**
- Form to create new multiple-choice questions.  
- Minimum of 3 choices and one correct answer required.  
- Saves data in Local Storage.

✅ **Edit Question Page**
- Pre-filled form to update existing questions.  
- Updates the modified question in Local Storage.

✅ **Local Storage Persistence**
- All data remains intact even after page refresh or browser restart.

✅ **Responsive Design**
- Clean and mobile-friendly UI using **CSS Flexbox** and **media queries**.

---

## 🛠️ Technologies Used
- **React.js** (Functional Components + Hooks)  
- **React Router DOM** for navigation  
- **Local Storage** for data persistence  
- **CSS Flexbox** and **Media Queries** for responsiveness  

---

## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/question-bank-app.git
   ```

2. **Navigate to project folder:**
   ```bash
   cd question-bank-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. Open the app in your browser:  
   👉 http://localhost:3000

---

## 🧩 Folder Structure
```
question-bank-app/
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── QuestionCard.js
│   │
│   ├── pages/
│   │   ├── QuestionsPage.js
│   │   ├── CreateQuestion.js
│   │   ├── EditQuestion.js
│   │
│   ├── App.js
│   ├── index.js
│   ├── App.css
│
├── public/
├── package.json
└── README.md
```

---

## 🧠 Learning Outcomes
By building this project, you will understand:
- React Hooks (`useState`, `useEffect`, `useNavigate`, `useParams`)
- CRUD operations in Local Storage  
- React Router for multi-page navigation  
- Managing and passing state between components  
- Implementing responsive UI in React apps  

---

## 👨‍💻 Developer
**Mohamed Harrun**  
*MERN Stack Developer*  
📧 Email: [your email here]  
💼 Portfolio: [your portfolio link]  



