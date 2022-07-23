import { useContext } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import AuthContext from 'store/auth-context';
import Layout from 'components/Layout/Layout';
import Home from 'views/Home';
import Settings from 'views/Settings';
import WorkoutsList from 'views/WorkoutsList'
import Account from 'views/Account'
import Dashboard from 'views/Dashboard';
import Register from 'views/Register/Register';
import Login from 'views/Login/Login';
import WelcomePage from 'views/WelcomePage/WelcomePage';

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <Routes>
            <Route path='/welcomepage' element={<WelcomePage />} />
            <Route path='/' element={<Home />} />
            {!authCtx.isLoggedIn && 
              <>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />} />
              </>
            }
            {authCtx.isLoggedIn && (<Route element={<Layout> <Outlet /></Layout>}>
              <Route path='/dashboard' element={<Dashboard/>} /> 
              <Route path="/workouts" element={<WorkoutsList />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/account' element={<Account />} />
            </Route>)}
            <Route path="*" element={<h1>You have no power here :)</h1>} />
    </Routes>
  );
}

export default App;
