import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from './views/Home';
import Settings from 'views/Settings';
import WorkoutsList from './views/WorkoutsList'
import Account from './views/Account'
import Dashboard from 'views/Dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path='/dashboard' element={<Dashboard/>} /> 
          <Route path="/workouts" element={<WorkoutsList />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </React.StrictMode>
);
