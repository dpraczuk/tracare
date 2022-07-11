import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './views/Main';
import WorkoutsList from './views/WorkoutsList'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path="/main" element={<Main />} />
          <Route path="/workouts" element={<WorkoutsList />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);
