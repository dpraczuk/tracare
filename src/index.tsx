
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'views/Home';
import Settings from 'views/Settings';
import WorkoutsList from 'views/WorkoutsList'
import Account from 'views/Account'
import Dashboard from 'views/Dashboard';
import Register from 'views/Register/Register';
import Login from 'views/Login/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
      <BrowserRouter>
          <Routes>
            <Route element={<Layout> <Outlet /></Layout>}>
              <Route path='/' element={<App />} />
              <Route path="/home" element={<Home />} />
              <Route path='/dashboard' element={<Dashboard/>} /> 
              <Route path="/workouts" element={<WorkoutsList />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/account' element={<Account />} />
            </Route>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />} />
          </Routes>
      </BrowserRouter>
);
