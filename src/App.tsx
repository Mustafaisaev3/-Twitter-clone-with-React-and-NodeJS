import React, { useEffect } from 'react';
import './App.css';
import { ManagedUIContext } from './context/ui.context';
import ManagedModal from './components/modal/managed-modal';
import { Switch, Route } from 'react-router-dom';

// Pages
import {SignIn} from './pages/SignIn';
import {Home} from './pages/Home/Home';
import ToastList from './components/toast/ToastList';
import { useDispatch } from 'react-redux';
import { AuthApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/action';

function App() {
  const dispatch = useDispatch()

  const isAuth = async () => {
    try {
      const {data} = await AuthApi.getMe()
      dispatch(setUserData(data)) 
    } catch (error) {
      
    }
  }

  useEffect(() => {
    isAuth()
  }, [])

  return (
    <>
    <ManagedUIContext>
      <Switch>
        <Route path='/signin' component={SignIn}/>
        <Route path='/' component={Home}/>
      </Switch>
      <ManagedModal />
      <ToastList />
    </ManagedUIContext>
    </>
  );
}

export default App;
